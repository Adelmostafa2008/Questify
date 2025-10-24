using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.DTOs
{
    public class SubmissionRequestDTO
    {
        public string Userid { get; set; }
        public int Taskid { get; set; }
        public string SubmittedData { get; set; }

    }
    
    public class ExistingSubmissionDTO
    {
        public string userid { get; set; }
        public int taskid { get; set; }
    }
}