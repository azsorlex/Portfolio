using Portfolio.Infrastructure.DBContexts.MongoDB;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ExperienceRepository(MongoDBContext context) : BaseRepository<Experience>(context), IExperienceRepository
    {
    }
}