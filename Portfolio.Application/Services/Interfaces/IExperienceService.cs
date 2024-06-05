using Portfolio.Application.Models.DTOs;

namespace Portfolio.Application.Services.Interfaces
{
    public interface IExperienceService
    {
        Task<IEnumerable<ExperienceDTO>> GetAllExperiences();
    }
}
