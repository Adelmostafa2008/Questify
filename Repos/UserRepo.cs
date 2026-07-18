using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.db;
using Backend.Models;
using Backend.Repos.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repos
{
    public class UserRepo : GenericRepo<Users>, IUserRepo
    {
        public UserRepo(AppDb db) : base(db)
        {
        }

        public async Task<Users> GetUserByGoogleSub(string sub)
        {
           var user = await _db.Users.FirstOrDefaultAsync(x => x.GoogleSub == sub);
           return user;
        }

        public async Task<Users> GetUserByRefreshToken(string ttt)
        {
            //Console.WriteLine($"the token : {ttt}");
            var user = await _db.Users.FirstOrDefaultAsync(x => x.RefreshToken == ttt);
            //Console.WriteLine($"user : {user}");
            return user;    
        }
    }
}