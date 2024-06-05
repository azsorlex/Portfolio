using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL
{
    public sealed class SQLDBContext(DbContextOptions options) : DbContext(options)
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var type = GetType();
            modelBuilder.ApplyConfigurationsFromAssembly(type.Assembly, t => t.Namespace!.StartsWith(type.Namespace!));
            base.OnModelCreating(modelBuilder);
        }
    }
}