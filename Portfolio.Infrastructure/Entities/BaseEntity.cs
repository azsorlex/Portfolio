using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Infrastructure.Entities
{
    public abstract class BaseEntity
    {
        [Column(Order = 2)]
        public string Name { get; set; }
    }
}