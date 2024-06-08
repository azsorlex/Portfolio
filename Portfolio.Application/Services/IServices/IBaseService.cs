namespace Portfolio.Application.Services.IServices {
    public interface IBaseService<TDto> {
        Task<IEnumerable<TDto>> GetAll();

        Task<TDto> GetByIds(params object[] ids);
    }
}