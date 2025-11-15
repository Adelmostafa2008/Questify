using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.DTOs;
using Backend.Models;
using Backend.Repos.Interfaces;
using Backend.Searchers;
using Backend.Sorters;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("favourites")]
    [ApiController]
    public class UTfavouritesController : ControllerBase
    {
        private readonly IUTfavouritesRepo _fr;

        public UTfavouritesController(IUTfavouritesRepo fr)
        {
            _fr = fr;
        }

        [HttpGet("CheckExistance")]
        public async Task<IActionResult> CheckFavEix([FromQuery] int taskid, [FromQuery] string userid)
        {
            var res = await _fr.CheckFavExists(userid, taskid);

            if (!res) return NotFound(false);

            return Ok(true);
        }

        [HttpDelete("DeleteFav")]
        public async Task<IActionResult> DeleteFav([FromQuery] int taskid, [FromQuery] string userid)
        {
            var res = await _fr.GetFavById(userid, taskid);

            if (res == null) return NotFound();

            await _fr.Delete(res);

            return Ok("Task Removed From Your Favourites List Successfully");
        }

        [HttpPost("AddToFavourites")]
        public async Task<IActionResult> AddToFav([FromBody] CheckUTfavouritesRepo req)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var favreq = new UTfavourites
            {
                TaskId = req.taskid,
                UserId = req.userid,
            };

            await _fr.Create(favreq);

            return Ok("Task Added To Your Favourites List Successfully");
        }

        [HttpGet("GetAllFav/{userid}")]
        public async Task<IActionResult> GetAllFav([FromRoute] string userid, [FromQuery] TaskSort task, [FromQuery] TaskSearch search)
        {
            var res = await _fr.GetAllFav(userid, task, search);

            if (!res.Any()) return NotFound();

            var vres = res.Select(x => new
            {
                id = x.Id,
                taskname = x.taskname,
                taskdescription = x.taskdescription,
                taskcategory = x.taskcategory,
                taskdefficulty = x.taskdefficulty,
                taskpoints = x.taskpoints,
                tasktime = x.tasktime,

            });

            return Ok(vres);
        }
    }
}