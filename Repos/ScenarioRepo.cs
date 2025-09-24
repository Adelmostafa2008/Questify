using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.ModelOfModels;
using Backend.Models;
using Backend.db;
using Microsoft.EntityFrameworkCore;
using Backend.Mappers;

namespace Backend.Repos
{
    public class ScenarioRepo : IScenarioRepo
    {
        private readonly AppDb _db;
      
        public ScenarioRepo(AppDb context)
        {
            _db = context; 
          
        }

        public async Task<Scenarios> createScenario(ScenarioModel scene , int Tid)
        {
            var newScene = scene.ScenarioModelMapper();
            var task = await _db.Tasks.FindAsync(Tid);
            newScene.Task = task;
            newScene.TaskId = task.Id;
            await _db.Scenarios.AddAsync(newScene);
            await _db.SaveChangesAsync();
            return newScene;
        }

        public async Task<bool> deleteScenatio(int id)
        {
            var scene = await getScenario(id);

            if (scene != null)
            {
                _db.Scenarios.Remove(scene);
                await _db.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<Scenarios> getScenario(int id)
        {
            var scene = await _db.Scenarios.Where(s => s.TaskId == s.Task.Id).Include(s => s.Task).FirstOrDefaultAsync(s => s.Id == id);
            return scene;
        }

        public async Task<List<Scenarios>> getScenarios()
        {
            return await _db.Scenarios.Where(s => s.TaskId == s.Task.Id).Include(s => s.Task).ToListAsync();
        }

        public async Task<bool> updateScenario(int id, ScenarioModel scene)
        {
            var oldscene = await getScenario(id);
            if (oldscene != null)
            {
                oldscene.scenariotitle = scene.scenariotitle;
                oldscene.scenariodescription = scene.scenariodescription;
                await _db.SaveChangesAsync();
                return true;
            }

            return false;
        }
    }
}