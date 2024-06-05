using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.DBContexts.SQL;

namespace Portfolio.Infrastructure.Repositories
{
    public sealed class RepositoryManager(SQLDBContext sqlDbContext, MongoDBContext mongoDBContext) : IRepositoryManager
    {
        private readonly Lazy<IContactRepository> _contactRepository = new(() => new ContactRepository(sqlDbContext));
        private readonly Lazy<IExperienceRepository> _experienceRepository = new(() => new ExperienceRepository(mongoDBContext));
        private readonly Lazy<ISkillRepository> _skillRepository = new(() => new SkillRepository(mongoDBContext));

        public IContactRepository ContactRepository => _contactRepository.Value;
        public IExperienceRepository ExperienceRepository => _experienceRepository.Value;
        public ISkillRepository SkillRepository => _skillRepository.Value;
    }
}