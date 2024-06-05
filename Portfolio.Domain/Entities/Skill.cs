using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Portfolio.Domain.Enums;

namespace Portfolio.Domain.Entities
{
    public class Skill : BaseEntity
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public SkillType Type { get; set; }
        public byte Priority { get; set; }
        public string Image { get; set; }
    }
}