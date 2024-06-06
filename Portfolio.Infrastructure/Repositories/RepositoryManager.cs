using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.DBContexts.SQL;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    public sealed class RepositoryManager(SQLDBContext sqlDbContext, MongoDBContext mongoDBContext) : IRepositoryManager
    {
        private readonly Lazy<IContactRepository<Contact>> _contactRepository = new(() => new ContactRepository<Contact>(sqlDbContext));
        private readonly Lazy<IExperienceRepository<Experience>> _experienceRepository = new(() => new ExperienceRepository<Experience>(mongoDBContext));
        private readonly Lazy<ISkillRepository<Skill>> _skillRepository = new(() => new SkillRepository<Skill>(mongoDBContext));

        public IContactRepository<Contact> ContactRepository => _contactRepository.Value;
        public IExperienceRepository<Experience> ExperienceRepository => _experienceRepository.Value;
        public ISkillRepository<Skill> SkillRepository => _skillRepository.Value;
    }
}