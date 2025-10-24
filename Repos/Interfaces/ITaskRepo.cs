using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Repos.Interfaces;
using Backend.Searchers;
using Backend.Sorters;

namespace Backend.Interfaces
{
    public interface ITaskRepo : IGenericRepo<Quests>
    {
        Task<List<Quests>> GetTasks(TaskSearch search , TaskSort sort);
        Task CreateTask(Quests task, IList<Scenarios> scenes);
        Task<Quests> GetTaskById(int id);
        Task<bool> UpdateTask(int id , List<Scenarios> scenes , Quests tasks);
    }
}