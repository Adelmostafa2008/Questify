using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.ModelOfModels;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("regesteration")]
    [ApiController]
    public class RegController : ControllerBase
    {
        private readonly UserManager<Users> _user;
        private readonly ITokenGenerator _token;
        private readonly IUTsubmissionsRepo _sub;
        private readonly SignInManager<Users> _signInManager;
        public RegController(UserManager<Users> user, ITokenGenerator token, SignInManager<Users> sign , IUTsubmissionsRepo sup)
        {
            _token = token;
            _user = user;
            _signInManager = sign;
            _sub = sup;
        }

        [HttpPost]
        public async Task<IActionResult> CreateNew([FromBody] UserModel user)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest("Some Validations in your model didnot got specified");
                var userUsername = await _user.FindByNameAsync(user.username);
                var userEmail = await _user.FindByEmailAsync(user.email);
                if (userUsername != null)
                {
                    return BadRequest("Username already exists");
                }
                if (userEmail != null)
                {
                    return BadRequest("Email address already exists");
                }
                var newUser = new Users
                {
                    UserName = user.username,
                    Email = user.email
                };

                var createdUser = await _user.CreateAsync(newUser, user.password);
                if (createdUser.Succeeded)
                {
                    var Role = await _user.AddToRoleAsync(newUser, "User");
                    if (Role.Succeeded)
                    {
                        return Ok(
                            new RegModel
                            {
                                UserName = newUser.UserName,
                                Email = newUser.Email,
                                Token = _token.CreateToken(newUser)
                            }
                        );
                    }
                    else
                    {
                        return BadRequest(Role.Errors);
                    }
                }
                else
                {
                    return BadRequest(createdUser.Errors);
                }
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginModel login)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid login data.");


            var user = await _user.FindByNameAsync(login.UserName);
            if (user == null)
                return Unauthorized("Invalid username or password.");


            var result = await _signInManager.CheckPasswordSignInAsync(user, login.Password, false);
            if (!result.Succeeded)
                return Unauthorized("Invalid username or password.");


            var token = _token.CreateToken(user);

            return Ok(new
            {
                Id = user.Id,
                Username = user.UserName,
                Email = user.Email,
                Token = token,
                ProfilePic = user.ProfilePic
            });
        }
        
       [HttpPut("{id}")]
        public async Task<IActionResult> EditUser([FromRoute] string id, [FromForm] UserEditModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            var user = await _user.FindByIdAsync(id);
            if (user == null)
                return NotFound("User not found.");

            // Update username
            if (!string.IsNullOrEmpty(model.UserName) && model.UserName != user.UserName)
            {
                var existingUsername = await _user.FindByNameAsync(model.UserName);
                if (existingUsername != null && existingUsername.Id != id)
                    return BadRequest("Username already exists.");
                user.UserName = model.UserName;
            }

            // Update email
            if (!string.IsNullOrEmpty(model.Email) && model.Email != user.Email)
            {
                var existingEmail = await _user.FindByEmailAsync(model.Email);
                if (existingEmail != null && existingEmail.Id != id)
                    return BadRequest("Email already exists.");
                user.Email = model.Email;
            }

            //update description

            if (!string.IsNullOrEmpty(model.Description) && model.Description != user.Description)
            {
                user.Description = model.Description;
            }

            // Update profile picture
            if (model.ProfilePicFile != null && model.ProfilePicFile.Length > 0)
            {
                var imagesFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images");

                // Ensure the folder exists
                if (!Directory.Exists(imagesFolder))
                    Directory.CreateDirectory(imagesFolder);

                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(model.ProfilePicFile.FileName);
                var filePath = Path.Combine(imagesFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await model.ProfilePicFile.CopyToAsync(stream);
                }

                user.ProfilePic = $"images/{fileName}";
            }

            // Save changes
            var result = await _user.UpdateAsync(user);
            if (!result.Succeeded) return BadRequest(result.Errors);

            return Ok(new
            {
                Username = user.UserName,
                Email = user.Email,
                ProfilePic = user.ProfilePic,
                Describtion = user.Description,
                Message = "Profile updated successfully"
            });
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser([FromRoute] string id)
        {
            var user = await _user.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound("User not found");
            }
            else
            {
                return Ok(new
                { 
                    user.Id,
                    user.UserName,
                    user.Email,
                    user.ProfilePic,
                    user.Description
                });
            }
        }

        [HttpDelete]
        [Route("{userid}")]
        public async Task<IActionResult> DeleteUser([FromRoute] string userid)
        {
            var user = await _user.FindByIdAsync(userid);
            var subs = await _sub.getAll(userid);
            if (subs != null && subs.Count > 0)
            {
                await _sub.deleteSubmission(subs);
            }
            var result = await _user.DeleteAsync(user);
            if (!result.Succeeded)
            {   
                return BadRequest(new { message = "Failed to delete user", errors = result.Errors });
            }

            return Ok(new { message = "User deleted successfully" });

        }



    }
}