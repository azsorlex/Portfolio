using Portfolio.Infrastructure.Entities;

namespace Portfolio.Infrastructure.Repositories.IRepositories
{
    public interface IQualificationRepository : IBaseRepository<Qualification>
    {
        new Task<IEnumerable<Qualification>> GetAll();

        new Task<Qualification?> GetByIds(params object[] keys);
    }
}