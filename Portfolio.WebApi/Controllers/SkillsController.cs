using Microsoft.AspNetCore.Mvc;
using Portfolio.Application.Services.Interfaces;

namespace Portfolio.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class SkillsController(IServiceManager serviceManager, ILogger<SkillsController> logger) : ControllerBase
    {
        private readonly IServiceManager _serviceManager = serviceManager;
        private readonly ILogger<SkillsController> _logger = logger;

        [HttpGet]
        public async Task<IActionResult> GetAllSkills()
        {
            _logger.LogDebug("Fetching skills");
            var response = await _serviceManager.SkillService.GetAllSkills();
            _logger.LogDebug("Skills successfully fetched");
            return Ok(response);
        }
    }
}