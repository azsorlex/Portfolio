using AutoMapper;
using Portfolio.Application.Models.DTOs;
using Portfolio.Application.Services.Interfaces;
using Portfolio.Domain.Exceptions;
using Portfolio.Domain.Repositories;

namespace Portfolio.Application.Services
{
    internal sealed class SkillService(IRepositoryManager repositoryManager, IMapper mapper) : ISkillService
    {
        public async Task<IEnumerable<SkillDto>> GetAllSkills()
        {
            var results = await repositoryManager.SkillRepository.GetAllSkills();

            if (!results.Any())
                throw new NotFoundException("No skills were found in the database.");

            return mapper.Map<IEnumerable<SkillDto>>(results);
        }
    }
}