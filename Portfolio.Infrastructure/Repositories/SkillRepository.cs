using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Enums;
using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class SkillRepository(MongoDBContext context) : BaseRepository<Skill>(context), ISkillRepository
    {
        public async Task<IEnumerable<Skill>> GetSkillsByType(SkillType type)
        {
            return await _set.Where(s => s.Type == type).ToListAsync();
        }
    }
}