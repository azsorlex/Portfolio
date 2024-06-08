using AutoMapper;
using Portfolio.Application.Models;
using Portfolio.Application.Services.IServices;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services
{
    internal sealed class ContactService(IRepositoryManager repositoryManager, IMapper mapper) : BaseService<Contact, ContactDTO>(repositoryManager.ContactRepository, mapper), IContactService
    {
    }
}