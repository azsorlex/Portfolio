using Portfolio.Application.Models.DTOs;

namespace Portfolio.Application.Services.IServices
{
    public interface IExperienceService
    {
        Task<IEnumerable<ExperienceDTO>> GetAllExperiences();

        Task<ExperienceDTO> GetExperienceById(string id);
    }
}
