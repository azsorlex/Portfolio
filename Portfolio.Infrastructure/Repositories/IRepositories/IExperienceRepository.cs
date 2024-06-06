using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IExperienceRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Experience, new()
    {
    }
}