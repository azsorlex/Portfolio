namespace Portfolio.Domain.Entities
{
    public sealed class QualificationLevel
    {
        public int Id { get; set; }
        public byte Level { get; set; }
        public string Name { get; set; }

        public ICollection<Qualification> Qualifications { get; }
    }
}