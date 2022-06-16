using FileHandler;
using MongoDB.Driver;
using SCBHandeler;

namespace SCBCompilerAPI.Models
{
    public class SetupDatabase
    {
        private readonly IMongoCollection<Municipality> _municipalitiesService;

        public SetupDatabase()
        {
            var handler = new FileReader("appsettings.json");
            var file = handler.readFile();
            var mongoClient = new MongoClient(file["SCBDatabase"]["ConnectionString"].ToString());

            var mongoDatabase = mongoClient.GetDatabase(file["SCBDatabase"]["DatabaseName"].ToString());

            _municipalitiesService = mongoDatabase.GetCollection<Municipality>(file["SCBDatabase"]["MunicipalitiesCollectionName"].ToString());
        }

        public async void populate()
        {
            var dataset = await _municipalitiesService.Find(_ => true).ToListAsync();

            if (dataset.Count() == 0)
            {
                var handler = new APIHandler();
                var codes = handler.getMunicipalityCodes();
                var data = handler.getStatistics();

                foreach (var item in data.Keys)
                {
                    var statistics = new Dictionary<string, Dictionary<string, string>>();
                    string name = codes[item];

                    for (int i = 2016; i < 2021; i++)
                    {
                        statistics.Add(
                            i.ToString(), new Dictionary<string, string>
                            {
                            {"1", data[item][i.ToString()]["1"]},
                            {"2", data[item][i.ToString()]["2"]}
                            }
                        );
                    }
                    var newMunicipality = new Municipality(item, name, statistics);

                    await _municipalitiesService.InsertOneAsync(newMunicipality);
                }
            }
            
        }

    }
}
