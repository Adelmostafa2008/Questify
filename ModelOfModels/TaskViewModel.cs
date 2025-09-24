using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.ModelOfModels
{
    public class TaskViewModel
    {
        public int taskid { get; set; }
        public string taskname { get; set;} = string.Empty;
        public decimal solverate { get; set; }
        public string taskdefficulty { get; set; } = string.Empty; 
    }
}  