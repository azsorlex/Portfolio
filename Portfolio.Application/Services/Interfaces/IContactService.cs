using Portfolio.Application.Models.DTOs;

namespace Portfolio.Application.Services.Interfaces
{
    public interface IContactService
    {
        Task<IEnumerable<ContactDTO>> GetAllContacts();
        
        Task<ContactDTO> GetContactById(int id);
    }
}