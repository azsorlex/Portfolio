using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IRepositoryManager
    {
        IContactRepository ContactRepository { get; }
        IExperienceRepository ExperienceRepository { get; }
        ISkillRepository SkillRepository { get; }
    }
}