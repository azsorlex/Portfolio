using Microsoft.EntityFrameworkCore;
using WebsiteResume.Domain.Entities;
using WebsiteResume.Domain.Repositories;

namespace WebsiteResume.Infrastructure.Repositories
{
    internal sealed class SkillRepository(RepositoryDBContext dbContext) : ISkillRepository
    {
        public async Task<IEnumerable<Skill>> GetAllSkills() => await dbContext.Skills.OrderBy(x => x.Order).ToListAsync();
    }
}