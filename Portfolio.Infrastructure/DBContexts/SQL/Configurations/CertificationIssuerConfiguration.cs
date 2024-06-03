using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL.Configurations
{
    internal sealed class CertificationIssuerConfiguration : IEntityTypeConfiguration<CertificationIssuer>
    {
        public void Configure(EntityTypeBuilder<CertificationIssuer> builder)
        {
            builder.ToTable(nameof(CertificationIssuer));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(50);

            builder.HasMany(x => x.Certifications)
                .WithOne(c => c.CertificationIssuer)
                .HasForeignKey(c => c.IssuerId)
                .HasPrincipalKey(x => x.Id);

            builder.HasData(new CertificationIssuer()
            {
                Id = 1,
                Name = "Microsoft"
            },
            new CertificationIssuer()
            {
                Id = 2,
                Name = "Tricentis"
            },
            new CertificationIssuer()
            {
                Id = 3,
                Name = "PeopleCert"
            });
        }
    }
}