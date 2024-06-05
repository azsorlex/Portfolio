using Portfolio.Domain.Entities;

namespace Portfolio.Domain.Repositories
{
    public interface IRepositoryManager
    {
        IContactRepository<Contact> ContactRepository { get; }
        IExperienceRepository<Experience> ExperienceRepository { get; }
        ISkillRepository<Skill> SkillRepository { get; }
    }
}