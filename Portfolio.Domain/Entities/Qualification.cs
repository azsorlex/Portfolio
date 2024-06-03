namespace Portfolio.Domain.Entities
{
    public sealed class Qualification
    {
        public int Id { get; set; }
        public int InstitutionId { get; set; }
        public int QualificationLevelId { get; set; }
        public string Major {  get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly? EndDate { get; set; }

        public Institution Institution { get; set; }
        public QualificationLevel QualificationLevel { get; set; }
    }
}