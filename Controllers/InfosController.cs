using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Models;
using Backend.Repos.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("infos")]
    public class InfosController : ControllerBase
    {
        private readonly ITaskRepo _tr;
        private readonly IGenericRepo<Users> _ur;

        public InfosController(IGenericRepo<Users> ur, ITaskRepo tr)
        {
            _tr = tr;
            _ur = ur;
        }

        [HttpGet("getAboutInfos")]
        public async Task<IActionResult> GetAboutInfos()
        {
            var tasks = await _tr.GetAll();
            var users = await _ur.GetAll();

            var Vres = new
            {
                totaltasks = tasks.Any() ? tasks.Count : 0,
                totalusers = users.Any() ? users.Count : 0,
                totaltaskscats = tasks.Any() ? tasks.GroupBy(x => x.taskcategory).Count() : 0,
            };

            return Ok(Vres);
        }
    }
}