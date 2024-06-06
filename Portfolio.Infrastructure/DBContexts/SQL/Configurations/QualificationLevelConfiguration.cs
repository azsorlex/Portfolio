using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL.Configurations
{
    internal sealed class QualificationLevelConfiguration : IEntityTypeConfiguration<QualificationLevel>
    {
        public void Configure(EntityTypeBuilder<QualificationLevel> builder)
        {
            builder.ToTable(nameof(QualificationLevel));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Level)
                .IsRequired();

            builder.Property(x => x.Name)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(50);

            builder.HasMany(x => x.Qualifications)
                .WithOne(q => q.QualificationLevel)
                .HasForeignKey(q => q.QualificationLevelId)
                .HasPrincipalKey(x => x.Id);

            builder.HasData(new QualificationLevel()
            {
                Id = 1,
                Level = 7,
                Name = "Bachelor"
            });
        }
    }
}