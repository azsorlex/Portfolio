using Microsoft.AspNetCore.Mvc;
using WebsiteResume.Application.Services.Interfaces;

namespace WebsiteResume.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class SkillsController(IServiceManager serviceManager, ILogger<SkillsController> logger) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllSkills()
        {
            logger.LogDebug("Fetching skills");
            var response = await serviceManager.SkillService.GetAllSkills();
            logger.LogDebug("Skills successfully fetched");
            return Ok(response);
        }
    }
}