using Newtonsoft.Json;
using Portfolio.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Application.Models
{
    public sealed record SkillDTO
    {
        public string? Id { get; init; }
        [Required]
        public string Name { get; init; }
        [Required]
        public SkillType Type { get; init; }
        [Required]
        public byte Priority { get; init; }
        [Required]
        public string Image { get; init; }
    }
}