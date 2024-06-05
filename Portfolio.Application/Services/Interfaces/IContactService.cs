using Portfolio.Application.Models.DTOs;

namespace Portfolio.Application.Services.Interfaces
{
    public interface IContactService
    {
        Task<ICollection<ContactDTO>> GetAllContacts();
    }
}