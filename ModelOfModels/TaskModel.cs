using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.ModelOfModels
{
    public class TaskModel
    {
        [Required]
        public string taskname { get; set; } = string.Empty;
        [Required]
        public string taskdescription { get; set; } = string.Empty;
        [Required]
        public string taskcategory { get; set; } = string.Empty;
        [Required]
        public string taskdefficulty { get; set; } = string.Empty; 
        [Required]
        public int tasktime { get; set; }
        [Required]
        public int taskpoints { get; set; }
        [Required]
        public List<ScenarioModel> scene { get; set; }
    }
} 