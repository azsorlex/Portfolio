using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebsiteResume.Domain.Entities;

namespace WebsiteResume.Infrastructure.Configurations
{
    internal sealed class SkillConfiguration : IEntityTypeConfiguration<Skill>
    {
        public void Configure(EntityTypeBuilder<Skill> builder)
        {
            builder.ToTable(nameof(Skill));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnType("varchar").HasMaxLength(50);

            builder.Property(x => x.Order).IsRequired();

            builder.HasData(
                new Skill() { Id = "SQL", Order = 4 },
                new Skill() { Id = "Microsoft Azure", Order = 2 },
                new Skill() { Id = "C#", Order = 0 },
                new Skill() { Id = "ASP.NET Core", Order = 1 },
                new Skill() { Id = "React.js", Order = 3 }
            );
        }
    }
}