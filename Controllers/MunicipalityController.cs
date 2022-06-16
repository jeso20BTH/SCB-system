using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace UserClient.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MunicipalityController : ControllerBase
    {
        private static readonly HttpClient client = new HttpClient();

        private readonly ILogger<MunicipalityController> _logger;

        public MunicipalityController(ILogger<MunicipalityController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
        {
            var data = client.GetStringAsync("https://localhost:7165/api/Municipality").Result;
            return data;
        }
    }      
}