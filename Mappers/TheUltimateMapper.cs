using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.DTOs;
using Backend.DTOs;
using Backend.Models;

namespace Backend.Mappers
{
    public static class TheUltimateMapper
    {
    
        public static Quests TaskModelMapper(this ReadTaskDTO task )
        {
            return new Quests
            {
                taskname = task.taskname,
                taskdescription = task.taskdescription,
                taskcategory = task.taskcategory,
                taskdefficulty = task.taskdefficulty,
                taskpoints = task.taskpoints,
                tasktime = task.tasktime,
            };
        }
       public static Scenarios ScenarioModelMapper(this ReadScenarioDTO scene)
        {
            return new Scenarios
            {

                scenariotitle = scene.scenariotitle,
                scenariodescription = scene.scenariodescription,
                

            };
               
        } 

        public static List<ReadTaskDetailsDTO> TasksModelMapper(this IQueryable<Quests> tasks){
            var taskveiw = new List<ReadTaskDetailsDTO>();

            foreach (var i in tasks)
            {
                taskveiw.Add(new ReadTaskDetailsDTO
                {
                    taskname = i.taskname,
                    taskdefficulty = i.taskdefficulty,
                    solverate = i.solveRate,
                    taskid = i.Id
                });
            }

           
           return taskveiw;
           
        }

    }
}