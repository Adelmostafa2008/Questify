using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Quests
    {
        [Key]
        public int Id { get; set; }
        public string taskname { get; set; } = string.Empty;
        public string taskdescription { get; set; } = string.Empty;
        public string taskcategory { get; set; } = string.Empty;
        public string taskdefficulty { get; set; } = string.Empty;
        public int tasktime { get; set; }
        public int taskpoints { get; set; }
        public IList<Scenarios> ?scenarios { get; set; }
        public decimal solveRate { get; set; }
        public IList<UTsubmission> ? users { get; set; }
       
    }
}  