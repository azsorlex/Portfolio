using AutoMapper;
using Portfolio.Application.Models;
using Portfolio.Application.Services.IServices;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services
{
    internal sealed class SkillService(IRepositoryManager repositoryManager, IMapper mapper) : BaseService<Skill, SkillDTO>(repositoryManager.SkillRepository, mapper), ISkillService
    {
        private new readonly ISkillRepository _repository = repositoryManager.SkillRepository;

        public async Task<List<SkillDTO>> GetAll(int? limit)
        {
            var result = await _repository.GetAll(limit);
            return MapToList(result);
        }
    }
}