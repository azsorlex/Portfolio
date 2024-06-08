
using AutoMapper;
using Portfolio.Domain.Exceptions;
using Portfolio.Infrastructure.Entities;
using Portfolio.Infrastructure.Repositories.IRepositories;

namespace Portfolio.Application.Services.IServices {
    internal class BaseService<TEntity, TDto>(IBaseRepository<TEntity> repository, IMapper mapper) : IBaseService<TDto> where TEntity : BaseEntity, new()
    {
        protected readonly IBaseRepository<TEntity> _repository = repository;
        protected readonly IMapper _mapper = mapper;

        public virtual async Task<IEnumerable<TDto>> GetAll()
        {
            var result = await _repository.GetAll();

            if (!result.Any())
                throw new NotFoundException(nameof(TEntity));

            return _mapper.Map<IEnumerable<TDto>>(result);
        }

        public virtual async Task<TDto> GetByIds(params object[] ids)
        {
            var result = await _repository.GetByIds(ids) ?? throw new NotFoundException(nameof(TEntity));
            return _mapper.Map<TDto>(result);
        }
    }
}