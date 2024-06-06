using Portfolio.Domain.Enums;
using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface ISkillRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Skill, new()
    {
        Task<IEnumerable<TEntity>> GetSkillsByType(SkillType type);
    }
}