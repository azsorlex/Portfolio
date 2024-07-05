using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;

namespace Portfolio.Infrastructure.DBContexts.MongoDB
{
    public sealed class MongoDBContext : DbContext
    {
        public readonly IMongoDatabase Db;

        public MongoDBContext(DbContextOptions options) : base(options) {
            var properties = options.GetExtension<MongoOptionsExtension>();
            Db = properties.MongoClient!.GetDatabase(properties.DatabaseName);
        }

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