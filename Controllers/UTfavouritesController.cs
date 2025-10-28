using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.DTOs;
using Backend.Models;
using Backend.Repos.Interfaces;
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

            if (res == null) return NotFound("Invalid Id");

            await _fr.Delete(res);

            return Ok("Done!");
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

            return Ok("Done!");
        }
    }
}