using Portfolio.Domain.Entities;
using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.DBContexts.SQL;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ContactRepository<TEntity>(SQLDBContext context) :
        BaseRepository<TEntity>(context),
        IContactRepository<TEntity> where TEntity : Contact, new()
    {
    }
}