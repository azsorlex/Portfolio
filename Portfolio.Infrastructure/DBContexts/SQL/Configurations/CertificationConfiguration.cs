using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL.Configurations
{
    internal sealed class CertificationConfiguration : IEntityTypeConfiguration<Certification>
    {
        public void Configure(EntityTypeBuilder<Certification> builder)
        {
            builder.ToTable(nameof(Certification));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(100);

            builder.Property(x => x.IssueDate)
                .HasColumnType("date")
                .HasDefaultValueSql("getdate()");

            builder.Property(x => x.ExpiryDate)
                .HasColumnType("date");

            builder.Property(x => x.Image)
                .IsUnicode(false)
                .HasMaxLength(50);

            builder.Property(x => x.URL)
                .IsUnicode(false)
                .HasMaxLength(200);

            builder.HasOne(x => x.CertificationIssuer)
                .WithMany(ci => ci.Certifications)
                .HasForeignKey(x => x.IssuerId)
                .HasPrincipalKey(ci => ci.Id);

            builder.HasOne(x => x.Parent)
                .WithOne()
                .HasForeignKey<Certification>(x => x.ParentId);

            builder.HasData(new Certification()
            {
                Id = 1,
                IssuerId = 1,
                Name = "Azure Fundamentals (AZ-900)",
                IssueDate = new(2024, 5, 19),
                URL = "https://learn.microsoft.com/api/credentials/share/en-gb/AlexanderRozsa/A78FE043E18F7ADA?sharingId=6D6A8C67B7D53131"
            });
        }
    }
}