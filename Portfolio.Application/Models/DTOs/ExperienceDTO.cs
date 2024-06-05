using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Portfolio.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Application.Models.DTOs
{
    public sealed record ExperienceDTO
    {
        public string? Id { get; init; }
        [Required]
        [JsonConverter(typeof(StringEnumConverter))]
        public ExperienceType Type { get; init; }
        [Required]
        public string Name { get; init; }
        public string? Company { get; init; }
        public string? Location { get; init; }
        public List<string>? Skills { get; init; }
        public List<string>? DescriptionLines { get; init; }
        public List<MediaDTO>? Media { get; init; }
        [Required]
        public DateTime StartDate { get; init; }
        public DateTime? EndDate { get; init; }
    }

    public sealed record MediaDTO
    {
        public string Title { get; init; }
        public string? Description { get; init; }
        public string? URL { get; init; }
    }
}