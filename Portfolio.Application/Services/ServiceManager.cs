using AutoMapper;
using Portfolio.Application.Models;
using Portfolio.Application.Services.IServices;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services
{
    public sealed class ServiceManager(IRepositoryManager repositoryManager, IMapper mapper) : IServiceManager
    {
        private readonly Lazy<IBaseService<CertificationDTO>> _certificationService = new(() => new BaseService<Certification, CertificationDTO>(repositoryManager.CertificationRepository, mapper));
        private readonly Lazy<IContactService> _contactService = new(() => new ContactService(repositoryManager, mapper));
        private readonly Lazy<IExperienceService> _experienceService = new(() => new ExperienceService(repositoryManager, mapper));
        private readonly Lazy<IBaseService<QualificationDTO>> _qualificationService = new(() => new BaseService<Qualification, QualificationDTO>(repositoryManager.QualificationRepository, mapper));
        private readonly Lazy<ISkillService> _skillService = new(() => new SkillService(repositoryManager, mapper));

        public IBaseService<CertificationDTO> CertificationService => _certificationService.Value;
        public IContactService ContactService => _contactService.Value;
        public IExperienceService ExperienceService => _experienceService.Value;
        public IBaseService<QualificationDTO> QualificationService => _qualificationService.Value;
        public ISkillService SkillService => _skillService.Value;
    }
}