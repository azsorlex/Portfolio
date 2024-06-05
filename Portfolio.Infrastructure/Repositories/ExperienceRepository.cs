using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.DBContexts.MongoDB;

namespace Portfolio.Infrastructure.Repositories
{
    internal sealed class ExperienceRepository(MongoDBContext context) : IExperienceRepository
    {
        private readonly MongoDBContext _context = context;

        public async Task<IEnumerable<Experience>> GetAllExperiences() => await _context.Experiences.ToListAsync();
    }
}