using System.ComponentModel.DataAnnotations;

namespace Portfolio.Application.Models
{
    public sealed record ContactDTO
    {
        public int? Id { get; init; }
        [Required]
        public string Icon { get; init; }
        [Required]
        public string Name { get; init; }
        public string? Alt { get; init; }
        public string? URL { get; init; }
    }
}