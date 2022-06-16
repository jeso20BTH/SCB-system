using Newtonsoft.Json.Linq;

namespace FileHandler
{
    public class FileHandler
    {
        public string filename { get; set; }

        public FileHandler(string filename)
        {
            this.filename = filename;
        }

        public JToken readFile()
        {
            // Read JSON file for search query
            string folder = getProjectFolder();
            JObject file = JObject.Parse(File.ReadAllText($"{folder}\\{filename}"));
            return file;
        }

        public string getProjectFolder()
        {
            string workDir = Directory.GetCurrentDirectory();
            return workDir;
        }
    }
}