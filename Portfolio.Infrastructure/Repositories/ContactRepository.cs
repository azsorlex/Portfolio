using Portfolio.Infrastructure.DBContexts.SQL;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ContactRepository<TEntity>(SQLDBContext context) :
        BaseRepository<TEntity>(context),
        IContactRepository<TEntity> where TEntity : Contact, new()
    {
    }
}