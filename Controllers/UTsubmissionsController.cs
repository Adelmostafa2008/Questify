using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Models;
using Backend.Repos;
using Backend.ModelOfModels;
using Microsoft.AspNetCore.Mvc;
using Backend.Sorters;
using Backend.Searchers;

namespace Backend.Controllers
{
    [Route("submission")]
    [ApiController]
    public class UTsubmissionsController : ControllerBase
    {
        private readonly IUTsubmissionsRepo _sub;
        public UTsubmissionsController(IUTsubmissionsRepo sub)
        {
            _sub = sub;
        }

        [HttpGet]
        [Route("{UserId}")]
        public async Task<IActionResult> GetSubmissions([FromRoute] string UserId)
        {
            var submissions = await _sub.getAll(UserId);
            if (submissions != null)
            {
                return Ok(submissions);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> CreateSubmission([FromBody] SubmissionRequest request)
        {
            var newSub = await _sub.addSubmissions(request.Userid, request.Taskid, request.SubmittedData);
            return Ok(newSub);
        }

        [HttpGet]
        [Route("latest/{userid}")]
        public async Task<IActionResult> getLatest([FromRoute] string userid , [FromQuery] TaskSort task , [FromQuery] TaskSearch search)
        {
            var latestsubmissions = await _sub.getLatest(userid , task , search);
            if (!latestsubmissions.Any())
            {
                return NotFound("there is a problem ");
            }
            return Ok(latestsubmissions);
        }

        [HttpGet]
        [Route("existing")]
        public async Task<IActionResult> getSubmission([FromQuery] ExistingSubmission sub)
        {
            var submission = await _sub.getSubmission(sub.userid, sub.taskid);
            return Ok(submission);
        }

        [HttpDelete]
        [Route("{userid}")]
        public async Task<IActionResult> deleteSubs([FromRoute] string userid)
        {
            var subs = await _sub.getAll(userid);
            await _sub.deleteSubmission(subs);
            return Ok("Done!");
        }
    }
}