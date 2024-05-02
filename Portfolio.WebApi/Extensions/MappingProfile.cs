using AutoMapper;
using Portfolio.Application.Models.DTOs;
using Portfolio.Domain.Entities;

namespace Portfolio.WebApi.Extensions
{
    internal sealed class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Skill, SkillDto>().ReverseMap();
        }
    }
}