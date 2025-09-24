using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.ModelOfModels
{
    public class UserEditModel
    {
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? CurrentPassword { get; set; }
        public string? NewPassword { get; set; }
        public IFormFile? ProfilePicFile { get; set; }
        public string? Description { get; set; }
    }

}