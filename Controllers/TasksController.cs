using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Mappers;
using Backend.ModelOfModels;
using Backend.Searchers;
using Backend.Sorters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Backend.Controllers
{
    [Route("tasks")]
    [ApiController]
    [Authorize] 
    public class TasksController : ControllerBase
    {
        private readonly ITaskRepo _it;
        public TasksController(ITaskRepo it)
        {
            _it = it;
        }

        [HttpGet]
        public async Task<IActionResult> getTasks([FromQuery] TaskSearch search, [FromQuery] TaskSort sort)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var allTasks = await _it.getTasks(search, sort);
            return Ok(allTasks);
        } 

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> getTask([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var Task = await _it.getTask(id);
            return Ok(Task);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> deleteTask([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (await _it.deleteTask(id))
            {
                return Ok("deleted successfully");
            }
            return NotFound(); 
        }

        [HttpPost]
        public async Task<IActionResult> createTask([FromBody] TaskModel task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _it.createTask(task); 
            return Ok("Done!");
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> updateTask([FromRoute] int id, [FromBody] TaskModel task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (await _it.updateTask(id, task))
            {
                return Ok(task.TaskModelMapper());
            }
            return NotFound();
        }
    }
}