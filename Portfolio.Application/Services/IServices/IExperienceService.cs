using Portfolio.Application.Models;

namespace Portfolio.Application.Services.IServices
{
    public interface IExperienceService : IBaseService<ExperienceDTO>
    {
        Task<List<ExperienceDTO>> GetCurrentExperiences();
    }
}