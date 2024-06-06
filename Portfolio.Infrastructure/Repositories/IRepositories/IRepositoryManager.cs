using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IRepositoryManager
    {
        IContactRepository<Contact> ContactRepository { get; }
        IExperienceRepository<Experience> ExperienceRepository { get; }
        ISkillRepository<Skill> SkillRepository { get; }
    }
}