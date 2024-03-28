using WebsiteResume.Domain.Repositories;

namespace WebsiteResume.Infrastructure.Repositories
{
    public sealed class RepositoryManager(RepositoryDBContext dbContext) : IRepositoryManager
    {
        private readonly Lazy<ISkillRepository> _skillRepository = new(() => new SkillRepository(dbContext));

        public ISkillRepository SkillRepository => _skillRepository.Value;
    }
}