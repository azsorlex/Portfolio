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
                .HasMaxLength(100);

            builder.Property(x => x.CredentialId)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(50);

            builder.Property(x => x.IssueDate)
                .HasColumnType("date")
                .HasDefaultValueSql("getdate()");

            builder.Property(x => x.ExpiryDate)
                .HasColumnType("date");

            builder.Property(x => x.Image)
                .IsUnicode(false)
                .HasMaxLength(300);

            builder.Property(x => x.URL)
                .IsUnicode(false)
                .HasMaxLength(300);

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
                Name = "ITIL® v4 Foundation",
                CredentialId = "GR671331654AR",
                IssueDate = new(2021, 11, 4),
                ExpiryDate = new(2024, 11, 3),
                Image = "https://www.peoplecert.org/-/media/folders-reorganized/images/logos-2024/peoplecert/product-logos/itil/pc_itil_rgb_outl_svg.svg",
            },
            new Certification()
            {
                Id = 2,
                IssuerId = 2,
                Name = "Tricentis Tosca Fundamentals − Automating web application testing (AS1)",
                CredentialId = "v4bejcn9852t",
                IssueDate = new(2024, 3, 7),
                Image = "https://asset.brandfetch.io/idaXelRI63/idEmaYvwMz.svg",
                URL = "https://verify.skilljar.com/c/v4bejcn9852t"
            },
            new Certification()
            {
                Id = 3,
                IssuerId = 3,
                Name = "Azure Fundamentals (AZ-900)",
                CredentialId = "A78FE043E18F7ADA",
                IssueDate = new(2024, 5, 19),
                Image = "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
                URL = "https://learn.microsoft.com/api/credentials/share/en-gb/AlexanderRozsa/A78FE043E18F7ADA?sharingId=6D6A8C67B7D53131"
            });
        }
    }
}