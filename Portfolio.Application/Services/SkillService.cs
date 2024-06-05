﻿using AutoMapper;
using Portfolio.Application.Models.DTOs;
using Portfolio.Application.Services.Interfaces;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Exceptions;
using Portfolio.Domain.Repositories;

namespace Portfolio.Application.Services
{
    internal sealed class SkillService(IRepositoryManager repositoryManager, IMapper mapper) : ISkillService
    {
        private readonly IRepositoryManager _repositoryManager = repositoryManager;
        private readonly IMapper _mapper = mapper;

        public async Task<IEnumerable<SkillDTO>> GetAllSkills()
        {
            var results = await _repositoryManager.SkillRepository.GetAllSkills();

            if (!results.Any())
                throw new NotFoundException(nameof(Skill));

            return _mapper.Map<IEnumerable<SkillDTO>>(results);
        }
    }
}