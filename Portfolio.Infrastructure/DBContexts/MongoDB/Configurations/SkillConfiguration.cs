using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.EntityFrameworkCore.Extensions;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Enums;

namespace Portfolio.Infrastructure.DBContexts.MongoDB.Configurations
{
    internal sealed class SkillConfiguration : IEntityTypeConfiguration<Skill>
    {
        public void Configure(EntityTypeBuilder<Skill> builder)
        {
            builder.ToCollection(nameof(Skill));
        }

        public static async Task TemporaryConfigure(IMongoDatabase Db)
        {
            try
            {
                await Db.RunCommandAsync<BsonDocument>($$"""
                {
                    create: "{{nameof(Skill)}}",
                    clusteredIndex: { "key": { _id: 1 }, "unique": true }
                }
                """);

                var collection = Db.GetCollection<Skill>(nameof(Skill));
                var baseBuilder = Builders<Skill>.IndexKeys;
                await collection.Indexes.CreateManyAsync([
                    new CreateIndexModel<Skill>(baseBuilder.Ascending(x => x.Priority), new() { Name = "Priority 1" }),
                    new CreateIndexModel<Skill>(baseBuilder.Combine(
                        baseBuilder.Ascending(x => x.Type),
                        baseBuilder.Ascending(x => x.Priority)
                    ), new() { Name = "Type 1 Priority 1" })
                ]);

                await collection.InsertManyAsync([
                    new Skill() {
                        Name = "C#",
                        Type = SkillType.ProgrammingLanguages,
                        Priority = 0,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "React.js",
                        Type = SkillType.LibrariesToolsAndFrameworks,
                        Priority = 0,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "MS SQL Server",
                        Type = SkillType.Databases,
                        Priority = 0,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "Azure",
                        Type = SkillType.OperatingSystemsAndEnvironments,
                        Priority = 0,
                        Image = "csharp"
                    }
                ]);
            }
            catch (Exception)
            {
            }
        }
    }
}