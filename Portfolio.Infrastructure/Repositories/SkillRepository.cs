using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Repositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class SkillRepository(RepositoryDBContext dbContext) : ISkillRepository
    {
        public async Task<IEnumerable<Skill>> GetAllSkills() => await dbContext.Skills.OrderBy(x => x.Order).ToListAsync();
    }
}