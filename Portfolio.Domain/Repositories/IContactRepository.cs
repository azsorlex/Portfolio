using Portfolio.Domain.Entities;

namespace Portfolio.Domain.Repositories
{
    public interface IContactRepository
    {
        Task<ICollection<Contact>> GetAllContacts();
    }
}