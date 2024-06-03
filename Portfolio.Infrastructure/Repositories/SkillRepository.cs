using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.DBContexts.MongoDB;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class SkillRepository(MongoDBContext context) : ISkillRepository
    {
        public async Task<IEnumerable<Skill>> GetAllSkills() => await context.Skills.ToListAsync();
    }
}