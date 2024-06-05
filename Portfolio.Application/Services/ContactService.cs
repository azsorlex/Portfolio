using AutoMapper;
using Portfolio.Application.Models.DTOs;
using Portfolio.Application.Services.Interfaces;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Exceptions;
using Portfolio.Domain.Repositories;

namespace Portfolio.Application.Services
{
    internal sealed class ContactService(IRepositoryManager repositoryManager, IMapper mapper) : IContactService
    {
        private readonly IRepositoryManager _repositoryManager = repositoryManager;
        private readonly IMapper _mapper = mapper;

        public async Task<ICollection<ContactDTO>> GetAllContacts()
        {
            var result = await _repositoryManager.ContactRepository.GetAllContacts();

            if (!result.Any())
                throw new NotFoundException(nameof(Contact));

            return _mapper.Map<ICollection<ContactDTO>>(result);
        }
    }
}