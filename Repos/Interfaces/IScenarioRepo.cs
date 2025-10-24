using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Repos.Interfaces;

namespace Backend.Interfaces
{
    public interface IScenarioRepo : IGenericRepo<Scenarios>
    {
        Task CreateScenario(Scenarios scene , int id);
    }
}