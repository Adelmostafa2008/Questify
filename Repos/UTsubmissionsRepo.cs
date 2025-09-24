using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.db;
using Backend.Interfaces;
using Backend.Models;
using Backend.Searchers;
using Backend.Sorters;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repos
{
    public class UTsubmissionsRepo : IUTsubmissionsRepo
    {
        private readonly AppDb _db;
        private readonly UserManager<Users> _user;
        public UTsubmissionsRepo(AppDb db, UserManager<Users> user)
        {
            _db = db;
            _user = user;
        }
        public async Task<UTsubmission> addSubmissions(string userid, int taskid , string submitteddata)
        {
            var checkSub = await _db.Submissions.FirstOrDefaultAsync(s => s.UserId == userid && s.TaskId == taskid);

            if (checkSub != null)
            {
                checkSub.SubmittedData = submitteddata;
                checkSub.SubmissionDate = DateTime.UtcNow;
                await _db.SaveChangesAsync();
                return checkSub;
            }

            var newSubmission = new UTsubmission
            {
                TaskId = taskid,
                UserId = userid, 
                SubmittedData = submitteddata,
            };

            await _db.Submissions.AddAsync(newSubmission);
            await _db.SaveChangesAsync();
            return newSubmission;
        }

        public async Task<bool> deleteSubmission(List<UTsubmission> subs)
        {
            _db.Submissions.RemoveRange(subs);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<List<UTsubmission>> getAll(string UserId)
        {
            var submissions = await _db.Submissions.Where(s => s.UserId == UserId).ToListAsync();
            return submissions;
        }

        public async Task<List<Tasks>> getLatest(string userid, TaskSort sort, TaskSearch search)
        {
            var submissions = await _db.Submissions
                .Where(s => s.UserId == userid)
                .OrderByDescending(s => s.SubmissionDate)
                .ToListAsync();

            if (!submissions.Any())
                return new List<Tasks>();

            var taskIds = submissions.Select(s => s.TaskId).ToList();

            var tasksQuery = _db.Tasks.Where(t => taskIds.Contains(t.Id));

            if (!string.IsNullOrWhiteSpace(sort.SortByCategory))
            {
                tasksQuery = tasksQuery.Where(t => t.taskcategory.Contains(sort.SortByCategory));
            }

            if (!string.IsNullOrWhiteSpace(search.TaskName))
            {
                tasksQuery = tasksQuery.Where(t => t.taskname.Contains(search.TaskName));
            }

            if (!string.IsNullOrWhiteSpace(sort.SortByDifficulty))
            {
                tasksQuery = tasksQuery.Where(t => t.taskdefficulty == sort.SortByDifficulty);
            }

            var filteredTasks = await tasksQuery.ToListAsync();

            var orderedTasks = submissions
                .Where(s => filteredTasks.Any(t => t.Id == s.TaskId))
                .Select(s => filteredTasks.First(t => t.Id == s.TaskId))
                .ToList();

            return orderedTasks;
        }

        public async Task<UTsubmission> getSubmission(string userid, int taskid)
        {
            var submission = await _db.Submissions.FirstOrDefaultAsync(s => s.UserId == userid && s.TaskId == taskid);
            return submission;
        }
    }
}