namespace Portfolio.Domain.Repositories
{
    public interface IRepositoryManager
    {
        IContactRepository ContactRepository { get; }
        IExperienceRepository ExperienceRepository { get; }
        ISkillRepository SkillRepository { get; }
    }
}