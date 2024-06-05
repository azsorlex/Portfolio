using Portfolio.Domain.Entities;

namespace Portfolio.Domain.Repositories
{
    public interface IExperienceRepository
    {
        Task<IEnumerable<Experience>> GetAllExperiences();
    }
}
