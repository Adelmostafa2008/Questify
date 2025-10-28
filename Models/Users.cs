using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Backend.Models
{
    public class Users : IdentityUser
    {
        public string? ProfilePic { get; set; }
        public string? Description { get; set; }
        public IList<UTsubmission>? tasks { get; set; }
        public IList<UTfavourites> ?favouriteTasks { get; set; }
        
    }
} 