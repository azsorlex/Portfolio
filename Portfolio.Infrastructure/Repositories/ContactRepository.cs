using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.DBContexts.SQL;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ContactRepository(SQLDBContext context) : IContactRepository
    {
        private readonly SQLDBContext _context = context;

        public async Task<ICollection<Contact>> GetAllContacts() => await _context.Contacts.ToListAsync();
    }
}