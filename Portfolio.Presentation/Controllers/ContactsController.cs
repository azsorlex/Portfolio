using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Application.Models;
using Portfolio.Application.Services.IServices;

namespace Portfolio.Presentation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class ContactsController(IServiceManager serviceManager, ILogger<ContactsController> logger) : ControllerBase
    {
        private readonly IServiceManager _serviceManager = serviceManager;
        private readonly ILogger<ContactsController> _logger = logger;

        [HttpGet]
        [ProducesResponseType(typeof(List<ContactDTO>), 200)]
        public async Task<IActionResult> GetAllContacts()
        {
            _logger.LogDebug("Fetching contacts");
            var response = await _serviceManager.ContactService.GetAll();
            _logger.LogDebug("Contacts successfully fetched");
            return Ok(response);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ContactDTO), 200)]
        public async Task<IActionResult> GetContactById(int id)
        {
            _logger.LogDebug("Fetching contact with ID {0}", id);
            var response = await _serviceManager.ContactService.GetByIds(id);
            _logger.LogDebug("Contact successfully fetched");
            return Ok(response);
        }
    }
}