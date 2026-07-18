using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Repos.Interfaces
{
    public interface IUserRepo : IGenericRepo<Users>
    {
        Task<Users> GetUserByRefreshToken(string ttt);
        Task<Users> GetUserByGoogleSub(string sub);
    }
}