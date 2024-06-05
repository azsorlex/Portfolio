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

        public async Task<IEnumerable<ContactDTO>> GetAllContacts()
        {
            var result = await _repositoryManager.ContactRepository.GetAll();

            if (!result.Any())
                throw new NotFoundException(nameof(Contact));

            return _mapper.Map<IEnumerable<ContactDTO>>(result);
        }

        public async Task<ContactDTO> GetContactById(int id)
        {
            var result = await _repositoryManager.ContactRepository.GetByIds(id) ?? throw new NotFoundException(nameof(Contact));
            return _mapper.Map<ContactDTO>(result);
        }
    }
}