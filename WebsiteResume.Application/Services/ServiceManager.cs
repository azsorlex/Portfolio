using AutoMapper;
using WebsiteResume.Application.Services.Interfaces;
using WebsiteResume.Domain.Repositories;

namespace WebsiteResume.Application.Services
{
    public sealed class ServiceManager(IRepositoryManager repositoryManager, IMapper mapper) : IServiceManager
    {
        private readonly Lazy<ISkillService> _skillService = new(() => new SkillService(repositoryManager, mapper));

        public ISkillService SkillService => _skillService.Value;
    }
}