using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class SkillRepository(MongoDBContext context) : BaseRepository<Skill>(context), ISkillRepository
    {
        public async Task<IEnumerable<Skill>> GetAll(int? limit)
        {
            var q = limit.HasValue
                ? _set.OrderBy(s => s.Priority).ThenBy(s => s.Type).Take(limit.Value)
                : _set.OrderBy(s => s.Type).ThenBy(s => s.Priority);

            return await q.ToListAsync();
        }
    }
}