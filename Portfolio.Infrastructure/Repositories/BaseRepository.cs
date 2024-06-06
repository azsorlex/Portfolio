using Microsoft.EntityFrameworkCore;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal abstract class BaseRepository<TEntity>(DbContext context) : IBaseRepository<TEntity> where TEntity : BaseEntity, new()
    {
        protected readonly DbSet<TEntity> _set = context.Set<TEntity>();

        public async Task<IEnumerable<TEntity>> GetAll() => await _set.ToListAsync();

        public async Task<TEntity?> GetByIds(params object[] keys) => await _set.FindAsync(keys);
    }
}