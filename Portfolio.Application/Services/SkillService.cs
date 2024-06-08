using AutoMapper;
using Portfolio.Application.Models;
using Portfolio.Application.Services.IServices;
using Portfolio.Domain.Enums;
using Portfolio.Domain.Exceptions;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services
{
    internal sealed class SkillService(IRepositoryManager repositoryManager, IMapper mapper) : BaseService<Skill, SkillDTO>(repositoryManager.SkillRepository, mapper), ISkillService
    {
        private new readonly ISkillRepository _repository = repositoryManager.SkillRepository;

        public async Task<List<SkillDTO>> GetSkillsByType(SkillType type)
        {
            var results = await _repository.GetSkillsByType(type);

            if (!results.Any())
                throw new NotFoundException(nameof(Skill));

            return _mapper.Map<List<SkillDTO>>(results);
        }
    }
}