using Microsoft.AspNetCore.Mvc;
using SCBCompilerAPI.Models;
using SCBCompilerAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SCBCompilerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MunicipalityController : ControllerBase
    {
        private readonly MunicipalitiesServices _municipalitiesService;

        public MunicipalityController(MunicipalitiesServices municipalitiesService)
        {
            _municipalitiesService = municipalitiesService;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<ActionResult<List<Municipality>>> Get() =>
            Ok(await _municipalitiesService.GetAsync());

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Municipality>> Get(string id)
        {
            var municipality = await _municipalitiesService.GetAsync(id);

            if (municipality is null)
            {
                return NotFound();
            }

            return Ok(municipality);
        }
    }
}
