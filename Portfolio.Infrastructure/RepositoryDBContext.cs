using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure
{
    public sealed class RepositoryDBContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Skill> Skills { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) => modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);
    }
}