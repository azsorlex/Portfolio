using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.Configurations
{
    internal sealed class SkillConfiguration : IEntityTypeConfiguration<Skill>
    {
        public void Configure(EntityTypeBuilder<Skill> builder)
        {
            builder.ToTable(nameof(Skill));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).HasMaxLength(50);

            builder.Property(x => x.Order).IsRequired();

            builder.HasData(
                new() { Id = "SQL", Order = 4 },
                new() { Id = "Microsoft Azure", Order = 2 },
                new() { Id = "C#", Order = 0 },
                new() { Id = "ASP.NET Core", Order = 1 },
                new() { Id = "React.js", Order = 3 }
            );
        }
    }
}