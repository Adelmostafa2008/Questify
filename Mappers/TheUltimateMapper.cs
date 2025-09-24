using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.ModelOfModels;
using Backend.Models;

namespace Backend.Mappers
{
    public static class TheUltimateMapper
    {
    
        public static Tasks TaskModelMapper(this TaskModel task )
        {
            return new Tasks
            {
                taskname = task.taskname,
                taskdescription = task.taskdescription,
                taskcategory = task.taskcategory,
                taskdefficulty = task.taskdefficulty,
                taskpoints = task.taskpoints,
                tasktime = task.tasktime,
            };
        }
       public static Scenarios ScenarioModelMapper(this ScenarioModel scene)
        {
            return new Scenarios
            {

                scenariotitle = scene.scenariotitle,
                scenariodescription = scene.scenariodescription,
                

            };
               
        } 

        public static List<TaskViewModel> TasksModelMapper(this IQueryable<Tasks> tasks){
            var taskveiw = new List<TaskViewModel>();

            foreach (var i in tasks)
            {
                taskveiw.Add(new TaskViewModel
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