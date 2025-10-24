using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Models;
using Backend.db;
using Microsoft.EntityFrameworkCore;
using Backend.Mappers;

namespace Backend.Repos
{
    public class ScenarioRepo : GenericRepo<Scenarios> , IScenarioRepo
    {
        public ScenarioRepo(AppDb _db ) : base(_db) {  }
        public async Task CreateScenario(Scenarios scene , int Tid)
        {
            scene.TaskId = Tid;
            await Create(scene);
            await _db.SaveChangesAsync();
        }

       
    }
}