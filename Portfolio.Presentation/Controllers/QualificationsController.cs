using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Application.Models;
using Portfolio.Application.Services.IServices;

namespace Portfolio.Presentation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class QualificationsController(IServiceManager serviceManager, ILogger<QualificationsController> logger) : ControllerBase
    {
        private readonly IServiceManager _serviceManager = serviceManager;
        private readonly ILogger<QualificationsController> _logger = logger;

        [HttpGet]
        [ProducesResponseType(typeof(List<QualificationDTO>), 200)]
        public async Task<IActionResult> GetAllCertifications()
        {
            _logger.LogDebug("Fetching qualifications");
            var response = await _serviceManager.QualificationService.GetAll();
            _logger.LogDebug("Qualifications successfully fetched");
            return Ok(response);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CertificationDTO), 200)]
        public async Task<IActionResult> GetCertificationById(int id)
        {
            _logger.LogDebug("Fetching qualification with ID {0}", id);
            var response = await _serviceManager.QualificationService.GetByIds(id);
            _logger.LogDebug("Qualifications successfully fetched");
            return Ok(response);
        }
    }
}