using AutoMapper;
using MongoDB.Bson;
using Portfolio.Application.Models.DTOs;
using Portfolio.Application.Services.Interfaces;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Exceptions;
using Portfolio.Domain.Repositories;

namespace Portfolio.Application.Services
{
    internal sealed class ExperienceService(IRepositoryManager repositoryManager, IMapper mapper) : IExperienceService
    {
        private readonly IRepositoryManager _repositoryManager = repositoryManager;
        private readonly IMapper _mapper = mapper;

        public async Task<IEnumerable<ExperienceDTO>> GetAllExperiences()
        {
            var results = await _repositoryManager.ExperienceRepository.GetAll();

            if (!results.Any())
                throw new NotFoundException(nameof(Experience));

            return _mapper.Map<IEnumerable<ExperienceDTO>>(results);
        }

        public async Task<ExperienceDTO> GetExperienceById(string id)
        {
            var results = await _repositoryManager.ExperienceRepository.GetByIds(ObjectId.Parse(id)) ?? throw new NotFoundException(nameof(Experience));
            return _mapper.Map<ExperienceDTO>(results);
        }
    }
}
