namespace Portfolio.Domain.Entities
{
    public class Institution : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Qualification> Qualifications { get; }
    }
}