using AutoMapper;
using Portfolio.Application.Models;
using Portfolio.Application.Services.IServices;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services
{
    internal sealed class ExperienceService(IRepositoryManager repositoryManager, IMapper mapper) : BaseService<Experience, ExperienceDTO>(repositoryManager.ExperienceRepository, mapper), IExperienceService
    {
        private new readonly IExperienceRepository _repository = repositoryManager.ExperienceRepository;

        public async Task<List<ExperienceDTO>> GetCurrentExperiences()
        {
            var result = await _repository.GetCurrentExperiences();
            return MapToList(result);
        }
    }
}
