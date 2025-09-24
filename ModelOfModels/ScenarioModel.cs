using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.ModelOfModels
{
    public class ScenarioModel
    {
        [Required]
        [MinLength(5, ErrorMessage = "Scenario title can not be under 5 characters")]
        [MaxLength(100, ErrorMessage = "Scenario title can not be over 100 characters")]
        public string scenariotitle { get; set; } = string.Empty;
        [Required]
        [MinLength(10, ErrorMessage = "Scenario description can not be under 10 characters")]
        [MaxLength(500, ErrorMessage = "Scenario description can not be over 500 characters")]
        public string scenariodescription { get; set; } = string.Empty;
    }
} 