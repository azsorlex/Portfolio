using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Portfolio.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Application.Models.DTOs
{
    public sealed record SkillDTO
    {
        public string? Id { get; init; }
        [Required]
        public string Name { get; init; }
        [Required]
        [JsonConverter(typeof(StringEnumConverter))]
        public SkillType Type { get; init; }
        [Required]
        public byte Priority { get; init; }
        [Required]
        public string Image { get; init; }
    }
}