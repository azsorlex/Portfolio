using AutoMapper;
using Portfolio.Application.Services.Interfaces;
using Portfolio.Domain.Repositories;

namespace Portfolio.Application.Services
{
    public sealed class ServiceManager(IRepositoryManager repositoryManager, IMapper mapper) : IServiceManager
    {
        private readonly Lazy<ISkillService> _skillService = new(() => new SkillService(repositoryManager, mapper));

        public ISkillService SkillService => _skillService.Value;
    }
}