using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.ModelOfModels
{
    public class SubmissionRequest 
    {
        public string Userid { get; set; }
        public int Taskid { get; set; }
        public string SubmittedData { get; set; }

    }
}