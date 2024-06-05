namespace Portfolio.Domain.Entities
{
    public sealed class Certification
    {
        public int Id { get; set; }
        public int IssuerId { get; set; }
        public int? ParentId { get; set; }
        public string Name { get; set; }
        public DateOnly IssueDate { get; set; }
        public DateOnly? ExpiryDate { get; set; }
        public string? Image { get; set; }
        public string? URL { get; set; }

        public CertificationIssuer CertificationIssuer { get; set; }
        public Certification? Parent { get; set; }
    }
}