using Microsoft.EntityFrameworkCore;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal class BaseRepository<TEntity>(DbContext context) : IBaseRepository<TEntity> where TEntity : BaseEntity, new()
    {
        protected readonly DbContext _context = context;
        protected readonly DbSet<TEntity> _set = context.Set<TEntity>();

        public virtual async Task<IEnumerable<TEntity>> GetAll() => await _set.ToListAsync();

        public virtual async Task<TEntity?> GetByIds(params object[] keys) => await _set.FindAsync(keys);
    }
}