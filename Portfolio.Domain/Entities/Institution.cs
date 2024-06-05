namespace Portfolio.Domain.Entities
{
    public sealed class Institution
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Qualification> Qualifications { get; }
    }
}