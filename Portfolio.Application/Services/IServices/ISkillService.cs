using Portfolio.Application.Models.DTOs;
using Portfolio.Domain.Enums;

namespace Portfolio.Application.Services.IServices
{
    public interface ISkillService : IBaseService<SkillDTO>
    {
        Task<IEnumerable<SkillDTO>> GetSkillsByType(SkillType type);
    }
}