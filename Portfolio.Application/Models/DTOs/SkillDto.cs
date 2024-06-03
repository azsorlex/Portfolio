using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Portfolio.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Application.Models.DTOs
{
    public class SkillDto
    {
        public string? _id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [JsonConverter(typeof(StringEnumConverter))]
        public SkillType Type { get; set; }
        [Required]
        public byte Priority { get; set; }
        [Required]
        public string Image {  get; set; }
    }
}