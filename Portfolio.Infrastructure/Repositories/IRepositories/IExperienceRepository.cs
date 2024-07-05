using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IExperienceRepository : IBaseRepository<Experience>
    {
        Task<IEnumerable<Experience>> GetCurrentExperiences();
    }
}