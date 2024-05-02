namespace Portfolio.Domain.Repositories
{
    public interface IRepositoryManager
    {
        ISkillRepository SkillRepository { get; }
    }
}