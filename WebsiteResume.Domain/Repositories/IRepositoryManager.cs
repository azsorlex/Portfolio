namespace WebsiteResume.Domain.Repositories
{
    public interface IRepositoryManager
    {
        ISkillRepository SkillRepository { get; }
    }
}