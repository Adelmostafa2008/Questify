using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.ModelOfModels;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface IScenarioRepo
    {
        Task<List<Scenarios>> getScenarios();
        Task<Scenarios> getScenario(int id);
        Task<Scenarios> createScenario(ScenarioModel scene , int id);
        Task<bool> deleteScenatio(int id);
        Task<bool> updateScenario(int id, ScenarioModel scene);
    }
}