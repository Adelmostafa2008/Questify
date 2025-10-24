using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.db;
using Backend.Interfaces;
using Backend.Mappers;
using Backend.Models;
using Backend.Searchers;
using Backend.Sorters;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repos
{
    public class TaskRepo : GenericRepo<Quests>, ITaskRepo
    {

        private readonly IScenarioRepo _sr;
        public TaskRepo(AppDb _db, IScenarioRepo sr) : base(_db)
        {
            _sr = sr; 
        }

        public async Task CreateTask(Quests task , IList<Scenarios> scenes)
        {
            await Create(task);
            foreach (var singleScene in scenes)
            {
                await _sr.CreateScenario(singleScene, task.Id);
            }
        }

        public async Task<Quests> GetTaskById(int id)
        {
            return await _db.Tasks.Include(x => x.scenarios).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Quests>> GetTasks(TaskSearch search, TaskSort sort)
        {
            var task = _db.Tasks.Include(x => x.scenarios).Where(t => t.taskcategory == sort.SortByCategory).AsQueryable();

            if (!string.IsNullOrWhiteSpace(search.TaskName))
            {
                task = task.Where(t => t.taskname.Contains(search.TaskName));
            }
            if (!string.IsNullOrWhiteSpace(sort.SortByDifficulty))
            {
                task = task.Where(t => t.taskdefficulty == sort.SortByDifficulty);
            }
            if (!string.IsNullOrWhiteSpace(sort.SortBySolveRate))
            {
                if (sort.SortBySolveRate == "lowFirst")
                {
                    task = task.OrderBy(t => t.solveRate);
                }
                else if (sort.SortBySolveRate == "highFirst")
                {
                    task = task.OrderByDescending(t => t.solveRate);
                }
            }

            return await task.ToListAsync();
        }

        public async Task<bool> UpdateTask(int id, List<Scenarios> scenes , Quests tasks)
        {
            var Quest = await _db.Tasks.Include(x => x.scenarios).FirstOrDefaultAsync(x => x.Id == id);

            if(Quest == null) return false;

            Quest.taskdescription = tasks.taskdescription;
            Quest.taskpoints = tasks.taskpoints;
            Quest.taskname = tasks.taskname;
            Quest.taskdefficulty = tasks.taskdefficulty;
            Quest.tasktime = tasks.tasktime;
            Quest.taskcategory = tasks.taskcategory;

            _db.Scenarios.RemoveRange(Quest.scenarios);

            Quest.scenarios = scenes;

            await _db.SaveChangesAsync();

            return true;
        }
    }
}