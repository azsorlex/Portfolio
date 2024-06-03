namespace Portfolio.Domain.Entities
{
    public sealed class CertificationIssuer
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Certification> Certifications { get; }
    }
}