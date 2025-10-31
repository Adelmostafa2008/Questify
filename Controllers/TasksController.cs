using Backend.DTOs;
using Backend.Interfaces;
using Backend.Mappers;
using Backend.Models;
using Backend.Searchers;
using Backend.Sorters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
            var allTasks = await _it.GetTasks(search, sort);

            if (!allTasks.Any() || allTasks.Count == 0) return NotFound("No Tasks Found");

            var Vres = allTasks.Select(x => new ReadTaskDTO
            {
                Id = x.Id,
                taskname = x.taskname,
                taskdescription = x.taskdescription,
                taskcategory = x.taskcategory,
                taskdefficulty = x.taskdefficulty,
                taskpoints = x.taskpoints,
                tasktime = x.tasktime,
                scene = x.scenarios.Any() ? x.scenarios.Select(x => new ReadScenarioDTO
                {
                    scenariotitle = x.scenariotitle,
                    scenariodescription = x.scenariodescription,
                }).ToList() : null,

            }).ToList();

            return Ok(Vres);
        } 

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> getTask([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var x = await _it.GetTaskById(id);

            if (x == null) return NotFound("Task Not Found");

            var Vres = new ReadTaskDTO
            {
                taskname = x.taskname,
                taskdescription = x.taskdescription,
                taskcategory = x.taskcategory,
                taskdefficulty = x.taskdefficulty,
                taskpoints = x.taskpoints,
                tasktime = x.tasktime,
                scene = x.scenarios.Any() ? x.scenarios.Select(x => new ReadScenarioDTO
                {
                    scenariotitle = x.scenariotitle,
                    scenariodescription = x.scenariodescription,
                }).ToList() : null,
            };
            return Ok(Vres);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> deleteTask([FromRoute] int id)
        {
           
            var res = await _it.GetById(id);

            if (res == null) return NotFound("Task Not Found");

            await _it.Delete(res);

            return Ok("Task Removed Successfully");
             
        }

        [HttpPost]
        public async Task<IActionResult> createTask([FromBody] ReadTaskDTO task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newTask = new Quests
            {
                taskcategory = task.taskcategory,
                taskdefficulty = task.taskdefficulty,
                taskdescription = task.taskdescription,
                taskname = task.taskname,
                taskpoints = task.taskpoints,
                tasktime = task.tasktime,
            };

            var sceneList = new List<Scenarios>();

            foreach(var i in task.scene)
            {
                var sc = new Scenarios
                {
                    scenariotitle = i.scenariotitle,
                    scenariodescription = i.scenariodescription,
                };

                sceneList.Add(sc);
            }

            await _it.CreateTask(newTask, sceneList);
            return Ok("Task Created Successfully");
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> updateTask([FromRoute] int id, [FromBody] ReadTaskDTO task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sceneList = new List<Scenarios>();

            foreach (var i in task.scene)
            {
                var sc = new Scenarios
                {
                    scenariotitle = i.scenariotitle,
                    scenariodescription = i.scenariodescription,
                };

                sceneList.Add(sc);
            }

            var tasks = new Quests
            {
                taskcategory = task.taskcategory,
                taskdefficulty = task.taskdefficulty,
                taskdescription = task.taskdescription,
                taskname = task.taskname,
                taskpoints = task.taskpoints,
                tasktime = task.tasktime,
            };

            var res = await _it.UpdateTask(id, sceneList,tasks);
            
            if(!res) return NotFound("Task Not Found");

            return Ok();
        }
    }
}