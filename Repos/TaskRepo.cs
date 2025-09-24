using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.db;
using Backend.Interfaces;
using Backend.Mappers;
using Backend.ModelOfModels;
using Backend.Models;
using Backend.Searchers;
using Backend.Sorters;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repos
{
    public class TaskRepo : ITaskRepo
    {

        private readonly AppDb _db;
        private readonly IScenarioRepo _sr;
        public TaskRepo(AppDb context, IScenarioRepo sr)
        {
            _db = context;
            _sr = sr;
        }
        public async Task<Tasks> createTask(TaskModel task)
        {
            var neuTask = task.TaskModelMapper();
            await _db.Tasks.AddAsync(neuTask);
            await _db.SaveChangesAsync();
            foreach (var singleScene in task.scene)
            {
                await _sr.createScenario(singleScene, neuTask.Id);
            }
            return neuTask;
        }
 
        public async Task<bool> deleteTask(int id)
        { 
            var Task = await getTask(id);
            if (Task != null)
            {
                _db.Tasks.Remove(Task);
                await _db.SaveChangesAsync();
                return true;
            } 
            return false;
        }

        public async Task<Tasks> getTask(int id)
        {
            var task = await _db.Tasks.Include(t => t.scenarios).FirstOrDefaultAsync(t => t.Id == id);
            return task;
        }

        public async Task<List<Tasks>> getTasks(TaskSearch search, TaskSort sort)
        {
            var task = _db.Tasks.Where(t => t.taskcategory == sort.SortByCategory).AsQueryable();

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

        public async Task<bool> updateTask(int id, TaskModel task)
        {
            var Task = await getTask(id);
            if (Task != null)
            {
                Task.taskname = task.taskname;
                Task.taskdescription = task.taskdescription;
                Task.taskcategory = task.taskcategory;
                Task.taskdefficulty = task.taskdefficulty;
                Task.taskpoints = task.taskpoints;
                Task.tasktime = task.tasktime;

                await _db.SaveChangesAsync();
                return true;
            }

            return false;
        }
    }
}