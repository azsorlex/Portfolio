using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ExperienceRepository<TEntity>(MongoDBContext context) :
        BaseRepository<TEntity>(context),
        IExperienceRepository<TEntity> where TEntity : Experience, new()
    {
    }
}