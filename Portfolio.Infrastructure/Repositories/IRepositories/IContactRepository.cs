using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IContactRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Contact, new()
    {
    }
}