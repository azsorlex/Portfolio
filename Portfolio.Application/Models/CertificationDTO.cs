namespace Portfolio.Application.Models
{
    public sealed record CertificationDTO
    {
        public int? Id { get; init; }
        public string Name { get; init; }
        public string Issuer { get; init; }
        public CertificationDTO? Parent { get; init; }
        public DateOnly IssueDate { get; init; }
        public DateOnly? ExpiryDate { get; init; }
        public string? Image { get; init; }
        public string? URL { get; init; }
    }
}