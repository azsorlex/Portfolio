using Portfolio.Domain.Entities;

namespace Portfolio.Domain.Repositories
{
    public interface IExperienceRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Experience, new()
    {
    }
}