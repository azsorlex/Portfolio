namespace Portfolio.Application.Services.Interfaces
{
    public interface IServiceManager
    {
        IContactService ContactService { get; }
        IExperienceService ExperienceService { get; }
        ISkillService SkillService { get; }
    }
}