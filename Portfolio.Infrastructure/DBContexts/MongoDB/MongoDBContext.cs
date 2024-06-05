using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Portfolio.Infrastructure.DBContexts.MongoDB
{
    public sealed class MongoDBContext(DbContextOptions options, IConfiguration configuration) : DbContext(options)
    {
        public readonly IMongoDatabase Db = new MongoClient(configuration.GetConnectionString("MongoDB")).GetDatabase("portfoliowebsite");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var type = GetType();
            modelBuilder.ApplyConfigurationsFromAssembly(type.Assembly, t =>
                t.Namespace!.StartsWith(type.Namespace!)
                && t.GetMethod("TemporaryConfigure")?.Invoke(null, [Db]) != null);

            base.OnModelCreating(modelBuilder);
        }
    }
}