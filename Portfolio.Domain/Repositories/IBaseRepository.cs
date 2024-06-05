using Portfolio.Domain.Entities;

namespace Portfolio.Domain.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity, new()
    {
        Task<IEnumerable<TEntity>> GetAll();
        Task<TEntity?> GetByIds(params object[] keys);
    }
}