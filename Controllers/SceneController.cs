using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.ModelOfModels;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("scene")]
    [ApiController]
    public class SceneController : ControllerBase
    {
        private readonly IScenarioRepo _sr;
        public SceneController(IScenarioRepo sr)
        {
            _sr = sr;
        }

        [HttpGet]
        public async Task<IActionResult> getAllScene()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(await _sr.getScenarios());
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> getScene([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(await _sr.getScenario(id));
        }

        [HttpPost]
        [Route("{id:int}")]
        public async Task<IActionResult> createScene([FromBody] ScenarioModel scene, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(await _sr.createScenario(scene, id));
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> updateScene([FromRoute] int id, [FromBody] ScenarioModel scene)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _sr.updateScenario(id, scene);
            return Ok("Done!");
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> deleteScene([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _sr.deleteScenatio(id);
            return Ok("deleted successfully");
        }   
    }
}