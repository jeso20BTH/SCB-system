using FileHandler;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;

namespace SCBHandeler
{
    public class APIHandler
    {
        private static readonly HttpClient client = new HttpClient();
        private static readonly string url = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101H/FoddaK";

        public Dictionary<string, string> getMunicipalityCodes() 
        {
            var data = client.GetStringAsync(url).Result;
            var json = JObject.Parse(data);
            var municipalities = new Dictionary<string, string>();

            foreach (var item in json["variables"])
            {
                if (item["code"].ToString() == "Region")
                {
                    for (int i = 0; i < item["values"].Count(); i++)
                    {
                        municipalities.Add(item["values"][i].ToString(), item["valueTexts"][i].ToString());
                    }

                    break;
                }
            }

            return municipalities;
        }

        public Dictionary<string, Dictionary<string, Dictionary<string, string>>> getStatistics()
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            var fileHandler = new FileReader("files\\query.json");
            var data = fileHandler.readFile();
            string dataString = JsonConvert.SerializeObject(data);
            var payload = new StringContent(dataString, Encoding.UTF8, "application/json");

            var response = client.PostAsync(url, payload).Result;
            var responseString = response.Content.ReadAsStringAsync().Result;
            var json = JObject.Parse(responseString);

            var groupedData = groupData(json["data"]);
            return groupedData;
        }

        public Dictionary<string, Dictionary<string, Dictionary<string, string>>> groupData(JToken dataset)
        {
            var output = new Dictionary<string, Dictionary<string, Dictionary<string, string>>>();
            foreach (var row in dataset)
            {
                var id = row["key"][0];
                var gender = row["key"][1];
                var year = row["key"][2];
                var value = row["values"][0];


                if (!output.ContainsKey(id.ToString()))
                {
                    var newDict = new Dictionary<string, Dictionary<string, string>>
                    {
                        {
                            $"{year}",
                            new Dictionary<string, string>
                            {
                                {$"{gender}", value.ToString()}
                            }
                        }
                    };
                    output.Add(id.ToString(), newDict);
                }
                else
                {
                    if (!output[id.ToString()].ContainsKey(year.ToString()))
                    {
                        var newYear = new Dictionary<string, string>
                        {
                            {$"{gender}", value.ToString()}
                        };

                        output[id.ToString()].Add(year.ToString(), newYear);
                    }
                    else
                    {
                        output[id.ToString()][year.ToString()].Add(gender.ToString(), value.ToString());
                    }
                }
            }

            return output;
        }
    }
}