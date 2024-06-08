using Portfolio.Application.Models;
using Portfolio.Domain.Enums;

namespace Portfolio.Application.Services.IServices
{
    public interface ISkillService : IBaseService<SkillDTO>
    {
        Task<List<SkillDTO>> GetSkillsByType(SkillType type);
    }
}