using Microsoft.EntityFrameworkCore;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class QualificationRepository(DbContext context) : BaseRepository<Qualification>(context), IQualificationRepository
    {
        public override async Task<IEnumerable<Qualification>> GetAll()
        {
            return await _set
                .Include(q => q.Institution)
                .Include(q => q.QualificationLevel)
                .ToListAsync();
        }

        public override async Task<Qualification?> GetByIds(params object[] keys)
        {
            return await _set
                .Include(q => q.Institution)
                .Include(q => q.QualificationLevel)
                .FirstOrDefaultAsync(q => q.Id == (int)keys.Single());
        }
    }
}