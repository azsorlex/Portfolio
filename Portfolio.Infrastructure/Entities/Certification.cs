using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Infrastructure.Entities
{
    public sealed class Certification : BaseEntity
    {
        [Column(Order = 1)]
        public int Id { get; set; }
        public int IssuerId { get; set; }
        public int? ParentId { get; set; }
        public string CredentialId { get; set; }
        public DateOnly IssueDate { get; set; }
        public DateOnly? ExpiryDate { get; set; }
        public string? Image { get; set; }
        public string? URL { get; set; }

        public CertificationIssuer CertificationIssuer { get; set; }
        public Certification? Parent { get; set; }
    }
}