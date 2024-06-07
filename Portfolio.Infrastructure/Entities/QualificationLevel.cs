namespace Portfolio.Infrastructure.Entities
{
    public sealed class QualificationLevel : BaseEntity
    {
        public int Id { get; set; }
        public byte Level { get; set; }
        public string Name { get; set; }

        public ICollection<Qualification> Qualifications { get; }
    }
}