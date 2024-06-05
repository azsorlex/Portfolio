using AutoMapper;
using Portfolio.Application.Models.DTOs;
using Portfolio.Domain.Entities;

namespace Portfolio.WebApi.Extensions
{
    internal sealed class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ContactDTO, Contact>().ReverseMap();
            CreateMap<ExperienceDTO, Experience>().ReverseMap();
            CreateMap<MediaDTO, Media>().ReverseMap();
            CreateMap<SkillDTO, Skill>().ReverseMap();
        }
    }
}