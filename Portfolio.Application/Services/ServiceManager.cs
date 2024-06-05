using AutoMapper;
using Portfolio.Application.Services.Interfaces;
using Portfolio.Domain.Repositories;

namespace Portfolio.Application.Services
{
    public sealed class ServiceManager(IRepositoryManager repositoryManager, IMapper mapper) : IServiceManager
    {
        private readonly Lazy<IContactService> _contactService = new(() => new ContactService(repositoryManager, mapper));
        private readonly Lazy<IExperienceService> _experienceService = new(() => new ExperienceService(repositoryManager, mapper));
        private readonly Lazy<ISkillService> _skillService = new(() => new SkillService(repositoryManager, mapper));

        public IContactService ContactService => _contactService.Value;
        public IExperienceService ExperienceService => _experienceService.Value;
        public ISkillService SkillService => _skillService.Value;
    }
}