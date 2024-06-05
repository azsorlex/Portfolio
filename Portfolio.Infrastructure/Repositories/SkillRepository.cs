using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Enums;
using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.DBContexts.MongoDB;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class SkillRepository<TEntity>(MongoDBContext context) :
        BaseRepository<TEntity>(context),
        ISkillRepository<TEntity> where TEntity : Skill, new()
    {
        public async Task<IEnumerable<TEntity>> GetSkillsByType(SkillType type)
        {
            return await _set.Where(s => s.Type == type).ToListAsync();
        }
    }
}