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
                        Priority = 0,
                        Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1024px-C_Sharp_Logo_2023.svg.png"
                    },
                    new Skill() {
                        Name = "JavaScript",
                        Type = SkillType.Programming_Languages,
                        Priority = 1,
                        Image = "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                    },
                    new Skill() {
                        Name = "React.js",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 0,
                        Image = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    },
                    new Skill() {
                        Name = "ASP.NET Core",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 1,
                        Image = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
                    },
                    new Skill() {
                        Name = "Entity Framework Core",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 2,
                        Image = "https://upload.wikimedia.org/wikipedia/commons/2/25/NuGet_project_logo.svg"
                    },
                    new Skill() {
                        Name = "MUI",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 3,
                        Image = "https://www.svgrepo.com/show/354048/material-ui.svg"
                    },
                    new Skill() {
                        Name = "Docker",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 4,
                        Image = "https://www.svgrepo.com/show/349342/docker.svg"
                    },
                    new Skill() {
                        Name = "Azure DevOps",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 5,
                        Image = "https://www.svgrepo.com/show/448271/azure-devops.svg"
                    },
                    new Skill() {
                        Name = "Framer Motion",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 6,
                        Image = "https://www.svgrepo.com/show/452207/framer.svg"
                    },
                    new Skill() {
                        Name = "Ant Design",
                        Type = SkillType.Libraries_Tools_and_Frameworks,
                        Priority = 7,
                        Image = "https://www.svgrepo.com/show/353401/ant-design.svg"
                    },
                    new Skill() {
                        Name = "MS SQL Server",
                        Type = SkillType.Databases,
                        Priority = 0,
                        Image = "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg"
                    },
                    new Skill() {
                        Name = "MySQL",
                        Type = SkillType.Databases,
                        Priority = 1,
                        Image = "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg"
                    },
                    new Skill() {
                        Name = "MongoDB",
                        Type = SkillType.Databases,
                        Priority = 2,
                        Image = "https://www.svgrepo.com/show/331488/mongodb.svg"
                    },
                    new Skill() {
                        Name = "Azure",
                        Type = SkillType.Operating_Systems_and_Environments,
                        Priority = 0,
                        Image = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                    },
                    new Skill() {
                        Name = "AWS",
                        Type = SkillType.Operating_Systems_and_Environments,
                        Priority = 1,
                        Image = "https://www.svgrepo.com/show/331300/aws.svg"
                    },
                    new Skill() {
                        Name = "Linux",
                        Type = SkillType.Operating_Systems_and_Environments,
                        Priority = 2,
                        Image = "https://kernel.org/theme/images/logos/tux.png"
                    },
                    new Skill() {
                        Name = "Windows",
                        Type = SkillType.Operating_Systems_and_Environments,
                        Priority = 3,
                        Image = "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg"
                    }
                ]);
            }
            catch (Exception)
            {
            }
        }
    }
}