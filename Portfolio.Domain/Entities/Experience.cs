using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Portfolio.Domain.Enums;

namespace Portfolio.Domain.Entities
{
    public class Experience : BaseEntity
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public ExperienceType Type { get; set; }
        public string Name { get; set; }
        public string? Company { get; set; }
        public string? Location { get; set; }
        public List<string>? Skills { get; set; }
        public List<string>? DescriptionLines { get; set; }
        public List<Media>? Media { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }

    public sealed class Media
    {
        public string Title { get; set; }
        public string? Description { get; set; }
        public string? URL { get; set; }
    }
}