using AutoMapper;
using MongoDB.Bson;
using Portfolio.Application.Models.DTOs;
using Portfolio.Application.Services.IServices;
using Portfolio.Domain.Enums;
using Portfolio.Domain.Exceptions;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services
{
    internal sealed class SkillService(IRepositoryManager repositoryManager, IMapper mapper) : ISkillService
    {
        private readonly IRepositoryManager _repositoryManager = repositoryManager;
        private readonly IMapper _mapper = mapper;

        public async Task<IEnumerable<SkillDTO>> GetAllSkills()
        {
            var results = await _repositoryManager.SkillRepository.GetAll();

            if (!results.Any())
                throw new NotFoundException(nameof(Skill));

            return _mapper.Map<IEnumerable<SkillDTO>>(results);
        }

        public async Task<SkillDTO> GetSkillById(string id)
        {
            var results = await _repositoryManager.SkillRepository.GetByIds(ObjectId.Parse(id)) ?? throw new NotFoundException(nameof(Skill));
            return _mapper.Map<SkillDTO>(results);
        }

        public async Task<IEnumerable<SkillDTO>> GetSkillsByType(SkillType type)
        {
            var results = await _repositoryManager.SkillRepository.GetSkillsByType(type);

            if (!results.Any())
                throw new NotFoundException(nameof(Skill));

            return _mapper.Map<IEnumerable<SkillDTO>>(results);
        }
    }
}