namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IRepositoryManager
    {
        ICertificationRepository CertificationRepository { get; }

        IContactRepository ContactRepository { get; }

        IExperienceRepository ExperienceRepository { get; }

        IQualificationRepository QualificationRepository { get; }

        ISkillRepository SkillRepository { get; }
    }
}