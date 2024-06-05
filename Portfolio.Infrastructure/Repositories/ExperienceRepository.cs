using Portfolio.Domain.Entities;
using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.DBContexts.MongoDB;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ExperienceRepository<TEntity>(MongoDBContext context) :
        BaseRepository<TEntity>(context),
        IExperienceRepository<TEntity> where TEntity : Experience, new()
    {
    }
}