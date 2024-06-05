namespace Portfolio.Domain.Entities
{
    public class CertificationIssuer : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Certification> Certifications { get; }
    }
}