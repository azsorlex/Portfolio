using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Infrastructure.Entities
{
    public sealed class Contact : BaseEntity
    {
        [Column(Order = 1)]
        public int Id { get; set; }
        public string Icon { get; set; }
        public string? Alt { get; set; }
        public string? URL { get; set; }
    }
}