using WebsiteResume.Application.Models.DTOs;

namespace WebsiteResume.Application.Services.Interfaces
{
    public interface ISkillService
    {
        Task<IEnumerable<SkillDto>> GetAllSkills();
    }
}