using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL.Configurations
{
    internal sealed class QualificationInstitutionConfiguration : IEntityTypeConfiguration<QualificationInstitution>
    {
        public void Configure(EntityTypeBuilder<QualificationInstitution> builder)
        {
            builder.ToTable(nameof(QualificationInstitution));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(50);

            builder.HasMany(x => x.Qualifications)
                .WithOne(q => q.Institution)
                .HasForeignKey(q => q.InstitutionId)
                .HasPrincipalKey(x => x.Id);

            builder.HasData(new QualificationInstitution()
            {
                Id = 1,
                Name = "Queensland University of Technology (QUT)"
            });
        }
    }
}