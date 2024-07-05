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
                    ), new() { Name = "Type 1 Priority 1" }),
                    new CreateIndexModel<Skill>(baseBuilder.Combine(
                        baseBuilder.Ascending(x => x.Priority),
                        baseBuilder.Ascending(x => x.Type)
                    ), new() { Name = "Priority 1 Type 1" })
                ]);

                await collection.InsertManyAsync([
                    new Skill() {
                        Name = "C#",
                        Type = SkillType.Programming_Languages,
                        Priority = 0
                    },
                    new Skill() {
                        Name = "JavaScript",
                        Type = SkillType.Programming_Languages,
                        Priority = 1
                    },
                    new Skill() {
                        Name = "React.js",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 0
                    },
                    new Skill() {
                        Name = "ASP.NET Core",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 1
                    },
                    new Skill() {
                        Name = "Entity Framework Core",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 2
                    },
                    new Skill() {
                        Name = "MUI",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 3
                    },
                    new Skill() {
                        Name = "Docker",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 4
                    },
                    new Skill() {
                        Name = "Azure DevOps",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 5
                    },
                    new Skill() {
                        Name = "Framer Motion",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 6
                    },
                    new Skill() {
                        Name = "Ant Design",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 7
                    },
                    new Skill() {
                        Name = "MS SQL Server",
                        Type = SkillType.Databases,
                        Priority = 0
                    },
                    new Skill() {
                        Name = "MySQL",
                        Type = SkillType.Databases,
                        Priority = 1
                    },
                    new Skill() {
                        Name = "MongoDB",
                        Type = SkillType.Databases,
                        Priority = 2
                    },
                    new Skill() {
                        Name = "Azure",
                        Type = SkillType.Platforms_and_Operating_Systems,
                        Priority = 0
                    },
                    new Skill() {
                        Name = "AWS",
                        Type = SkillType.Platforms_and_Operating_Systems,
                        Priority = 1
                    },
                    new Skill() {
                        Name = "Linux",
                        Type = SkillType.Platforms_and_Operating_Systems,
                        Priority = 2
                    },
                    new Skill() {
                        Name = "Windows",
                        Type = SkillType.Platforms_and_Operating_Systems,
                        Priority = 3
                    }
                ]);
            }
            catch (Exception)
            {
            }
        }
    }
}