using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Infrastructure.Entities
{
    public sealed class QualificationLevel : BaseEntity
    {
        [Column(Order = 1)]
        public int Id { get; set; }
        public byte Level { get; set; }

        public ICollection<Qualification> Qualifications { get; }
    }
}