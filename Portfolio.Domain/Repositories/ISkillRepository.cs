using Portfolio.Domain.Entities;

namespace Portfolio.Domain.Repositories
{
    public interface ISkillRepository
    {
        Task<IEnumerable<Skill>> GetAllSkills();
    }
}