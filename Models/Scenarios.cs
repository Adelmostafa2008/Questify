using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Scenarios
    {
        public int Id { get; set; }
        public string scenariotitle { get; set; } = string.Empty;
        public string scenariodescription { get; set; } = string.Empty;
        public int TaskId { get; set; }
        public Tasks Task { get; set; }
    }
}