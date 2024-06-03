using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL.Configurations
{
    internal sealed class ContactConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.ToTable(nameof(Contact));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Icon)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(20);

            builder.Property(x => x.Name)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(20);

            builder.Property(x => x.Alt)
                .IsUnicode(false)
                .HasMaxLength(50);

            builder.Property(x => x.URL)
                .IsUnicode(false)
                .HasMaxLength(200);

            builder.HasData(new Contact()
            {
                Id = 1,
                Name = "LinkedIn",
                Icon = "linkedin",
                URL = "https://linkedin.com/in/alexander-rozsa"
            },
            new Contact()
            {
                Id = 2,
                Name = "GitHub",
                Icon = "github",
                URL = "https://github.com/azsorlex"
            });
        }
    }
}