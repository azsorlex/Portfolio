using Portfolio.Domain.Entities;
using Portfolio.Domain.Enums;

namespace Portfolio.Domain.Repositories
{
    public interface ISkillRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Skill, new()
    {
        Task<IEnumerable<TEntity>> GetSkillsByType(SkillType type);
    }
}