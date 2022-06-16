using Microsoft.Extensions.Options;
using MongoDB.Driver;
using SCBCompilerAPI.Models;

namespace SCBCompilerAPI.Services
{
    public class MunicipalitiesServices
    {
        private readonly IMongoCollection<Municipality> _municipalitiesCollection;

        public MunicipalitiesServices(
            IOptions<DatabaseSettings> DatabaseSettings)
        {
            var mongoClient = new MongoClient(
                DatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                DatabaseSettings.Value.DatabaseName);

            _municipalitiesCollection = mongoDatabase.GetCollection<Municipality>(
                DatabaseSettings.Value.MunicipalitiesCollectionName);
        }

        public async Task<List<Municipality>> GetAsync() =>
            await _municipalitiesCollection.Find(_ => true).ToListAsync();

        public async Task<Municipality?> GetAsync(string id) =>
            await _municipalitiesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Municipality newMunicipality) =>
            await _municipalitiesCollection.InsertOneAsync(newMunicipality);

        public async Task UpdateAsync(string id, Municipality updatedMunicipality) =>
            await _municipalitiesCollection.ReplaceOneAsync(x => x.Id == id, updatedMunicipality);

        public async Task RemoveAsync(string id) =>
            await _municipalitiesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
