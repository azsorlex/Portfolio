using Portfolio.Application.Models;

namespace Portfolio.Application.Services.IServices
{
    public interface IServiceManager
    {
        IBaseService<CertificationDTO> CertificationService { get; }

        IContactService ContactService { get; }

        IExperienceService ExperienceService { get; }

        IBaseService<QualificationDTO> QualificationService { get; }

        ISkillService SkillService { get; }
    }
}