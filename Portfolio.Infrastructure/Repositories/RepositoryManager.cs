using Portfolio.Infrastructure;
using Portfolio.Domain.Repositories;

namespace Portfolio.Infrastructure.Repositories
{
    public sealed class RepositoryManager(RepositoryDBContext dbContext) : IRepositoryManager
    {
        private readonly Lazy<ISkillRepository> _skillRepository = new(() => new SkillRepository(dbContext));

        public ISkillRepository SkillRepository => _skillRepository.Value;
    }
}