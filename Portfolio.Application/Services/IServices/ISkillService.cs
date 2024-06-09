using Portfolio.Application.Models;

namespace Portfolio.Application.Services.IServices
{
    public interface ISkillService : IBaseService<SkillDTO>
    {
        Task<List<SkillDTO>> GetAll(int? limit);
    }
}