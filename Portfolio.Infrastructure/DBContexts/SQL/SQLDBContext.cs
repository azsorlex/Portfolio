using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL
{
    public sealed class SQLDBContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Certification> Certifications { get; init; }
        public DbSet<CertificationIssuer> CertificationIssuers { get; init; }
        public DbSet<Contact> Contacts { get; init; }
        public DbSet<Institution> Institutions { get; init; }
        public DbSet<Qualification> Qualifications { get; init; }
        public DbSet<QualificationLevel> QualificationLevels { get; init; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var type = GetType();
            modelBuilder.ApplyConfigurationsFromAssembly(type.Assembly, t => t.Namespace!.StartsWith(type.Namespace!));
            base.OnModelCreating(modelBuilder);
        }
    }
}