using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DTOs
{
    public class CheckUTfavouritesRepo
    {
        [Required]
        public int taskid { get; set; }
        [Required]
        public string userid { get; set; }
    }
}