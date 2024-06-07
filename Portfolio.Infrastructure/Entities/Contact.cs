namespace Portfolio.Infrastructure.Entities
{
    public sealed class Contact : BaseEntity
    {
        public int Id { get; set; }
        public string Icon { get; set; }
        public string Name { get; set; }
        public string? Alt { get; set; }
        public string? URL { get; set; }
    }
}