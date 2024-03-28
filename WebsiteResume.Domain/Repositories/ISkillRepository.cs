using WebsiteResume.Domain.Entities;

namespace WebsiteResume.Domain.Repositories
{
    public interface ISkillRepository
    {
        Task<IEnumerable<Skill>> GetAllSkills();
    }
}