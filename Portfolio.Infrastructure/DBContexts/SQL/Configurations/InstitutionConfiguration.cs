using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL.Configurations
{
    internal sealed class InstitutionConfiguration : IEntityTypeConfiguration<Institution>
    {
        public void Configure(EntityTypeBuilder<Institution> builder)
        {
            builder.ToTable(nameof(Institution));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(50);

            builder.HasMany(x => x.Qualifications)
                .WithOne(q => q.Institution)
                .HasForeignKey(q => q.InstitutionId)
                .HasPrincipalKey(x => x.Id);

            builder.HasData(new Institution()
            {
                Id = 1,
                Name = "Queensland University of Technology (QUT)"
            });
        }
    }
}