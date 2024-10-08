﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.DBContexts.SQL.Configurations
{
    internal sealed class QualificationConfiguration : IEntityTypeConfiguration<Qualification>
    {
        public void Configure(EntityTypeBuilder<Qualification> builder)
        {
            builder.ToTable(nameof(Qualification));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(50);

            builder.Property(x => x.StartDate)
                .IsRequired()
                .HasColumnType("date");

            builder.Property(x => x.EndDate)
                .HasColumnType("date");

            builder.HasOne(x => x.Institution)
                .WithMany(i => i.Qualifications)
                .HasForeignKey(x => x.InstitutionId)
                .HasPrincipalKey(i => i.Id);

            builder.HasOne(x => x.QualificationLevel)
                .WithMany(ql => ql.Qualifications)
                .HasForeignKey(x => x.QualificationLevelId)
                .HasPrincipalKey(ql => ql.Id);

            builder.HasData(new Qualification()
            {
                Id = 1,
                InstitutionId = 1,
                QualificationLevelId = 1,
                Name = "Computer Science",
                StartDate = new(2017, 2, 1),
                EndDate = new(2021, 1, 1)
            });
        }
    }
}