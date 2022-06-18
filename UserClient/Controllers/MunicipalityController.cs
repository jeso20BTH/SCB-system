using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace UserClient.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MunicipalityController : ControllerBase
    {
        private static readonly HttpClient client = new HttpClient();
        private static string url { get; } = "https://localhost:7165/api/Municipality";

        private readonly ILogger<MunicipalityController> _logger;

        public MunicipalityController(ILogger<MunicipalityController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
        {
            var data = client.GetStringAsync(url).Result;
            return data;
        }
    }
}
