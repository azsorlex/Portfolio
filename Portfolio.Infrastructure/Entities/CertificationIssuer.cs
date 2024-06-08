using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Infrastructure.Entities
{
    public sealed class CertificationIssuer : BaseEntity
    {
        [Column(Order = 1)]
        public int Id { get; set; }

        public ICollection<Certification> Certifications { get; }
    }
}