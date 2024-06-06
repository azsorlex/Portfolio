using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Application.Models.DTOs;
using Portfolio.Application.Services.IServices;
using Portfolio.Domain.Enums;

namespace Portfolio.Presentation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class SkillsController(IServiceManager serviceManager, ILogger<SkillsController> logger) : ControllerBase
    {
        private readonly IServiceManager _serviceManager = serviceManager;
        private readonly ILogger<SkillsController> _logger = logger;

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<SkillDTO>), 200)]
        public async Task<IActionResult> GetAllSkills(SkillType? type = null)
        {
            _logger.LogDebug("Fetching skills");
            var response = type == null
                ? await _serviceManager.SkillService.GetAllSkills()
                : await _serviceManager.SkillService.GetSkillsByType(type.Value);
            _logger.LogDebug("Skills successfully fetched");
            return Ok(response);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(SkillDTO), 200)]
        public async Task<IActionResult> GetSkillById(string id)
        {
            _logger.LogDebug("Fetching skill with ID {0}", id);
            var response = await _serviceManager.SkillService.GetSkillById(id);
            _logger.LogDebug("Skill successfully fetched");
            return Ok(response);
        }
    }
}