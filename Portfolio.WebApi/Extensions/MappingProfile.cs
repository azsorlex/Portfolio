using AutoMapper;
using Portfolio.Application.Models;
using Portfolio.Infrastructure.Entities;

namespace Portfolio.WebApi.Extensions
{
    internal sealed class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Certification, CertificationDTO>()
                .ForMember(dest => dest.Issuer, opt => opt.MapFrom(src => src.CertificationIssuer.Name))
                .ReverseMap();

            CreateMap<ContactDTO, Contact>().ReverseMap();

            CreateMap<ExperienceDTO, Experience>().ReverseMap();

            CreateMap<MediaDTO, Media>().ReverseMap();

            CreateMap<Qualification, QualificationDTO>()
                .ForMember(dest => dest.Institution, opt => opt.MapFrom(src => src.Institution.Name))
                .ForMember(dest => dest.QualificationLevel, opt => opt.MapFrom(src => src.QualificationLevel.Name))
                .ReverseMap();

            CreateMap<SkillDTO, Skill>().ReverseMap();
        }
    }
}