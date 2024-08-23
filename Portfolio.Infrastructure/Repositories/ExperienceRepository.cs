using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver;
using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ExperienceRepository(MongoDBContext context) : BaseRepository<Experience>(context), IExperienceRepository
    {
        private readonly IMongoCollection<Experience> _collection = context.Db.GetCollection<Experience>(nameof(Experience));

        public override async Task<IEnumerable<Experience>> GetAll()
        {
            PipelineDefinition<Experience, Experience> pipeline = new BsonDocument[]
            {
                new("$set",
                    new BsonDocument("SortEndDate",
                        new BsonDocument("$ifNull",
                            new BsonArray
                            {
                                "$EndDate",
                                DateTime.Now
                            }))),
                new("$sort",
                    new BsonDocument
                    {
                        { "SortEndDate", -1 },
                        { "StartDate", -1 }
                    }),
                new("$unset", "SortEndDate")
            };

            return await _collection.Aggregate(pipeline).ToListAsync();
        }

        public async Task<IEnumerable<Experience>> GetCurrentExperiences()
        {
            return await _set
                .Where(x => x.EndDate == null)
                .OrderByDescending(x => x.StartDate)
                .Select(x => new Experience() {
                    Id = x.Id,
                    Name = x.Name,
                    Type = x.Type
                })
                .ToListAsync();
        }
    }
}