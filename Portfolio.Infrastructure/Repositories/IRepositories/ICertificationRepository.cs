using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface ICertificationRepository : IBaseRepository<Certification>
    {
        new Task<IEnumerable<Certification>> GetAll();
    }
}