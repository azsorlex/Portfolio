using AutoMapper;
using WebsiteResume.Application.Models.DTOs;
using WebsiteResume.Domain.Entities;

namespace WebsiteResume.WebAPI.Extensions
{
    internal sealed class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Skill, SkillDto>().ReverseMap();
        }
    }
}