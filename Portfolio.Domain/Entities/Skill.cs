using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Portfolio.Domain.Enums;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json;

namespace Portfolio.Domain.Entities
{
    public sealed class Skill
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        [JsonConverter(typeof(StringEnumConverter))]
        public SkillType Type { get; set; }
        public byte Priority { get; set; }
        public string Image { get; set; }
    }
}