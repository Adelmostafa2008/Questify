using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.DTOs;
using Backend.Interfaces;
using Backend.Models;
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

            var res = await _sr.GetAll();

            var Vres = res.Select(x => new ReadScenarioDTO
            {
                scenariotitle = x.scenariotitle,
                scenariodescription = x.scenariodescription,
            });
            return Ok(Vres);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> getScene([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var res = await _sr.GetById(id);

            var Vres = new ReadScenarioDTO
            {
                scenariotitle = res.scenariotitle,
                scenariodescription = res.scenariodescription,
            };

            return Ok(Vres);
        }

        [HttpPost]
        [Route("{id:int}")]
        public async Task<IActionResult> createScene([FromBody] ReadScenarioDTO scene, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var scenario = new Scenarios
            {
                scenariotitle = scene.scenariotitle,
                scenariodescription = scene.scenariodescription,
            };

            await _sr.CreateScenario(scenario, id);

            return Ok("Done!");
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> updateScene([FromRoute] int id, [FromBody] ReadScenarioDTO scene)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var res = await _sr.GetById(id);

            if (res == null) return NotFound("Invalid Id");

            res.Id = id;
            res.scenariotitle = scene.scenariotitle;
            res.scenariodescription = scene.scenariodescription;

            await _sr.Update(res);

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

            var scene = await _sr.GetById(id);

            if (scene == null) return NotFound("Invalid Id");

            await _sr.Delete(scene);

            return Ok("deleted successfully");
        }   
    }
}