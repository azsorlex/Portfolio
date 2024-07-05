using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.DBContexts.SQL;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    public sealed class RepositoryManager(SQLDBContext sqlDbContext, MongoDBContext mongoDBContext) : IRepositoryManager
    {
        private readonly Lazy<ICertificationRepository> _certificationRepository = new(() => new CertificationRepository(sqlDbContext));
        private readonly Lazy<IContactRepository> _contactRepository = new(() => new ContactRepository(sqlDbContext));
        private readonly Lazy<IExperienceRepository> _experienceRepository = new(() => new ExperienceRepository(mongoDBContext));
        private readonly Lazy<IQualificationRepository> _qualificationRepository = new(() => new QualificationRepository(sqlDbContext));
        private readonly Lazy<ISkillRepository> _skillRepository = new(() => new SkillRepository(mongoDBContext));

        public ICertificationRepository CertificationRepository => _certificationRepository.Value;
        public IContactRepository ContactRepository => _contactRepository.Value;
        public IExperienceRepository ExperienceRepository => _experienceRepository.Value;
        public IQualificationRepository QualificationRepository => _qualificationRepository.Value;
        public ISkillRepository SkillRepository => _skillRepository.Value;
    }
}