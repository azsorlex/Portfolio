namespace Portfolio.Application.Services.IServices
{
    public interface IBaseService<TDto>
    {
        Task<List<TDto>> GetAll();

        Task<TDto> GetByIds(params object[] ids);
    }
}