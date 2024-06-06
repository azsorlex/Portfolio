using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity, new()
    {
        Task<IEnumerable<TEntity>> GetAll();
        Task<TEntity?> GetByIds(params object[] keys);
    }
}