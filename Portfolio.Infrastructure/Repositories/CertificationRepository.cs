using Microsoft.EntityFrameworkCore;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class CertificationRepository(DbContext context) : BaseRepository<Certification>(context), ICertificationRepository
    {
        public override async Task<IEnumerable<Certification>> GetAll()
        {
            return await _set
                .Where(c => c.ExpiryDate == null || c.ExpiryDate > DateOnly.FromDateTime(DateTime.Now))
                .OrderByDescending(c => c.IssueDate)
                .Include(c => c.CertificationIssuer)
                .Include(c => c.Parent)
                .ToListAsync();
        }

        public override async Task<Certification?> GetByIds(params object[] keys)
        {
            return await _set
                .Include(c => c.CertificationIssuer)
                .Include(c => c.Parent)
                .FirstOrDefaultAsync(c => c.Id == (int)keys.Single());
        }
    }
}