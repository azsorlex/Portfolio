using Portfolio.Domain.Entities;

namespace Portfolio.Domain.Repositories
{
    public interface IContactRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Contact, new()
    {
    }
}