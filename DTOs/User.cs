using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DTOs
{
    public class UserDTO
    {
        [Required]
        public string username { get; set; } = string.Empty;
        [Required]
        public string password { get; set; } = string.Empty;
        [Required]
        [EmailAddress]
        public string email { get; set; } = string.Empty;
    }

      public class LoginUserDTO
    {
        [Required]
        public string UserName { get; set;}
        [Required]
        public string Password { get; set; }
    }

    public class EditUserDTO
    {
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? CurrentPassword { get; set; }
        public string? NewPassword { get; set; }
        public IFormFile? ProfilePicFile { get; set; }
        public string? Description { get; set; }
    }

    public class ReadUserDTO
    {
        public string UserName { get; set; }
        public string Email { get; set; }   
        public string Token { get; set; }
    }
}