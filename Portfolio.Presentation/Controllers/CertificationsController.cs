using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Application.Models;
using Portfolio.Application.Services.IServices;

namespace Portfolio.Presentation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class CertificationsController(IServiceManager serviceManager, ILogger<CertificationsController> logger) : ControllerBase
    {
        private readonly IServiceManager _serviceManager = serviceManager;
        private readonly ILogger<CertificationsController> _logger = logger;

        [HttpGet]
        [ProducesResponseType(typeof(List<CertificationDTO>), 200)]
        public async Task<IActionResult> GetAllCertifications()
        {
            _logger.LogDebug("Fetching certifications");
            var response = await _serviceManager.CertificationService.GetAll();
            _logger.LogDebug("Certifications successfully fetched");
            return Ok(response);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CertificationDTO), 200)]
        public async Task<IActionResult> GetCertificationById(int id)
        {
            _logger.LogDebug("Fetching certification with ID {0}", id);
            var response = await _serviceManager.CertificationService.GetByIds(id);
            _logger.LogDebug("Certifications successfully fetched");
            return Ok(response);
        }
    }
}