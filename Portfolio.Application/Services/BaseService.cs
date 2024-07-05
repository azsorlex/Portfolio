
using AutoMapper;
using Portfolio.Domain.Exceptions;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services.IServices
{
    internal class BaseService<TEntity, TDto>(IBaseRepository<TEntity> repository, IMapper mapper) : IBaseService<TDto> where TEntity : BaseEntity, new()
    {
        protected readonly IBaseRepository<TEntity> _repository = repository;
        protected readonly IMapper _mapper = mapper;

        protected List<TDto> MapToList(IEnumerable<TEntity> result) {
            if (!result.Any())
                throw new NotFoundException(typeof(TEntity).Name);

            return _mapper.Map<List<TDto>>(result);
        }

        public virtual async Task<List<TDto>> GetAll()
        {
            var result = await _repository.GetAll();
            return MapToList(result);
        }

        public virtual async Task<TDto> GetByIds(params object[] ids)
        {
            var result = await _repository.GetByIds(ids) ?? throw new NotFoundException(typeof(TEntity).Name);
            return _mapper.Map<TDto>(result);
        }
    }
}