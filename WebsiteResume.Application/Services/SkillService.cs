using AutoMapper;
using WebsiteResume.Application.Models.DTOs;
using WebsiteResume.Application.Services.Interfaces;
using WebsiteResume.Domain.Exceptions;
using WebsiteResume.Domain.Repositories;

namespace WebsiteResume.Application.Services
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