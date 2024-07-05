namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IBaseRepository<TEntity>
    {
        Task<IEnumerable<TEntity>> GetAll();

        Task<TEntity?> GetByIds(params object[] keys);

        Task<IEnumerable<TEntity>> GetByName(string name);
    }
}