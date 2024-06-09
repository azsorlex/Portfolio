using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.EntityFrameworkCore.Extensions;
using Portfolio.Domain.Enums;
using Portfolio.Infrastructure.Entities;

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
                        Type = SkillType.Programming_Languages,
                        Priority = 0,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "JavaScript",
                        Type = SkillType.Programming_Languages,
                        Priority = 1,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "ASP.NET Core",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 0,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "EF Core",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 1,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "MS SQL Server",
                        Type = SkillType.Databases,
                        Priority = 0,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "MySQL",
                        Type = SkillType.Databases,
                        Priority = 1,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "Linux",
                        Type = SkillType.Operating_Systems_and_Environments,
                        Priority = 0,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "Windows",
                        Type = SkillType.Operating_Systems_and_Environments,
                        Priority = 1,
                        Image = "csharp"
                    },
                    new Skill() {
                        Name = "Azure",
                        Type = SkillType.Operating_Systems_and_Environments,
                        Priority = 2,
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