using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.ModelOfModels;
using Backend.Models;
using Backend.Searchers;
using Backend.Sorters;

namespace Backend.Interfaces
{
    public interface ITaskRepo
    {
        Task<List<Tasks>> getTasks(TaskSearch search , TaskSort sort);
        Task<Tasks> getTask(int id);
        Task<bool> deleteTask(int id);
        Task<bool> updateTask(int id, TaskModel task);
        Task<Tasks> createTask(TaskModel task); 
    }
}