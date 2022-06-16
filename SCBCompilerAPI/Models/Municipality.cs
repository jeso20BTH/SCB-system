using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace SCBCompilerAPI.Models
{
    public class Municipality
    {
        [BsonId]
        public string? Id { get; set; }
        public string? Name { get; set; }
        public Dictionary<string, Dictionary<string, string>> born { get; set; } =  null!;

        public Municipality(string id, string name, Dictionary<string, Dictionary<string, string>> born)
        {
            Id = id;
            Name = name;
            this.born = born;
        }
    }
}
