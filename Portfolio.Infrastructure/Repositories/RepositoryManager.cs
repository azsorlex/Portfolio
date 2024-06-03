using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.DBContexts.SQL;

namespace Portfolio.Infrastructure.Repositories
{
    public sealed class RepositoryManager(SQLDBContext sqlDbContext, MongoDBContext mongoDBContext) : IRepositoryManager
    {
        private readonly Lazy<ISkillRepository> _skillRepository = new(() => new SkillRepository(mongoDBContext));

        public ISkillRepository SkillRepository => _skillRepository.Value;
    }
}