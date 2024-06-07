using Portfolio.Domain.Enums;
using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface ISkillRepository : IBaseRepository<Skill>
    {
        Task<IEnumerable<Skill>> GetSkillsByType(SkillType type);
    }
}