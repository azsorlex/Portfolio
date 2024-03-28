using Microsoft.EntityFrameworkCore;
using WebsiteResume.Domain.Entities;

namespace WebsiteResume.Infrastructure
{
    public sealed class RepositoryDBContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Skill> Skills { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) => modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);
    }
}