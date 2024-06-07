using Portfolio.Infrastructure.DBContexts.SQL;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ContactRepository(SQLDBContext context) : BaseRepository<Contact>(context), IContactRepository
    {
    }
}