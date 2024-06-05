using Microsoft.AspNetCore.Mvc;
using Portfolio.Application.Services.Interfaces;

namespace Portfolio.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class ExperiencesController(IServiceManager serviceManager, ILogger<ExperiencesController> logger) : ControllerBase
    {
        private readonly IServiceManager _serviceManager = serviceManager;
        private readonly ILogger<ExperiencesController> _logger = logger;

        [HttpGet]
        public async Task<IActionResult> GetAllExperiences()
        {
            _logger.LogDebug("Fetching experiences");
            var response = await _serviceManager.ExperienceService.GetAllExperiences();
            _logger.LogDebug("Experiences successfully fetched");
            return Ok(response);
        }
    }
}