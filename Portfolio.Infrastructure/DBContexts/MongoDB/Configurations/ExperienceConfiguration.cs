using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.EntityFrameworkCore.Extensions;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Enums;

namespace Portfolio.Infrastructure.DBContexts.MongoDB.Configurations
{
    internal sealed class ExperienceConfiguration : IEntityTypeConfiguration<Experience>
    {
        public void Configure(EntityTypeBuilder<Experience> builder)
        {
            builder.ToCollection(nameof(Experience));
        }

        public static async Task TemporaryConfigure(IMongoDatabase Db)
        {
            try
            {
                await Db.RunCommandAsync<BsonDocument>($$"""
                {
                    create: "{{nameof(Experience)}}",
                    clusteredIndex: { "key": { _id: 1 }, "unique": true }
                }
                """);

                var collection = Db.GetCollection<Experience>(nameof(Experience));
                await collection.InsertManyAsync([
                    new Experience()
                    {
                        Type = ExperienceType.Work,
                        Name = "Full Stack .NET Developer",
                        Company = "Bupa",
                        Location = "Melbourne, AU",
                        Skills = [
                            "C#",
                            "React.js",
                            "MS SQL Server",
                            "Azure"
                        ],
                        DescriptionLines = [
                            "Worked in a large agile scrum team in the organisation’s Health Insurance division.",
                            "The main responsibilities were implementing brand new features and maintaining existing ones for the Product and Information Management (PIM) project."
                        ],
                        StartDate = DateTime.Parse("2022-01-31"),
                        EndDate = DateTime.Parse("2024-01-30")
                    },
                    new Experience()
                    {
                        Type = ExperienceType.Project,
                        Name = "Portfolio Website",
                        Skills = [
                            "C#",
                            "React.js",
                            "MS SQL Server",
                            "Azure"
                        ],
                        DescriptionLines = [
                            "A full stack portfolio website to showcase my works and also my expertise."
                        ],
                        Media = [
                            new() {
                                Title = "Repository",
                                Description = "My project's GitHub repository.",
                                URL = "https://github.com/azsorlex/Portfolio"
                            },
                            new () {
                                Title = "Website",
                                Description = "Where my site is hosted.",
                                URL = "https://alexanderrozsa.azurewebsites.net"
                            },
                            new() {
                                Title = "Portfolio Website ERD",
                                Description = "",
                                URL = "https://lucid.app/documents/view/8fddcecc-ab71-46aa-b95f-13cfbad9083a"
                            }
                        ],
                        StartDate = DateTime.Parse("2024-03-28")
                    }
                ]);
            }
            catch (Exception ex) { }
        }
    }
}