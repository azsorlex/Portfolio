using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Infrastructure.Entities
{
    public sealed class Qualification : BaseEntity
    {
        [Column(Order = 1)]
        public int Id { get; set; }
        public int InstitutionId { get; set; }
        public int QualificationLevelId { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly? EndDate { get; set; }

        public QualificationInstitution Institution { get; set; }
        public QualificationLevel QualificationLevel { get; set; }
    }
}