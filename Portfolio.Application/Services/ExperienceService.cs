using AutoMapper;
using Portfolio.Application.Models.DTOs;
using Portfolio.Application.Services.IServices;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services
{
    internal sealed class ExperienceService(IRepositoryManager repositoryManager, IMapper mapper) : BaseService<Experience, ExperienceDTO>(repositoryManager.ExperienceRepository, mapper), IExperienceService
    {
    }
}
