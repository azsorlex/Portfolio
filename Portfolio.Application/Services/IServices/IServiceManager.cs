namespace Portfolio.Application.Services.IServices
{
    public interface IServiceManager
    {
        IContactService ContactService { get; }
        IExperienceService ExperienceService { get; }
        ISkillService SkillService { get; }
    }
}