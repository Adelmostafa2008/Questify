using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.DTOs
{
    public class ReadTaskDTO
    {
        public int? Id { get; set; } = 0;
        [Required]
        public string taskname { get; set; } 
        [Required]
        public string taskdescription { get; set; } 
        [Required]
        public string taskcategory { get; set; } 
        [Required]
        public string taskdefficulty { get; set; } 
        [Required] 
        public int tasktime { get; set; }
        [Required]
        public int taskpoints { get; set; }
        [Required]
        public IList<ReadScenarioDTO>? scene { get; set; }
    }
    
    public class ReadTaskDetailsDTO
    {
        public int taskid { get; set; }
        public string taskname { get; set;} = string.Empty;
        public decimal solverate { get; set; }
        public string taskdefficulty { get; set; } = string.Empty; 
    }
} 