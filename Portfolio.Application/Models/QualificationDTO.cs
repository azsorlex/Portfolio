namespace Portfolio.Application.Models
{
    public sealed record QualificationDTO
    {
        public int? Id { get; init; }
        public string Name { get; init; }
        public string Institution { get; init; }
        public string QualificationLevel { get; init; }
        public DateOnly StartDate { get; init; }
        public DateOnly? EndDate { get; init; }
    }
}