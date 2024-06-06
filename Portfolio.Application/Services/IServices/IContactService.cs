using Portfolio.Application.Models.DTOs;

namespace Portfolio.Application.Services.IServices
{
    public interface IContactService
    {
        Task<IEnumerable<ContactDTO>> GetAllContacts();

        Task<ContactDTO> GetContactById(int id);
    }
}