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
    public class UTfavouritesRepo : GenericRepo<UTfavourites>, IUTfavouritesRepo
    {
        public UTfavouritesRepo(AppDb _db) : base(_db)
        {
        }

        public async Task<bool> CheckFavExists(string Uid, int Tid)
        {
            var res = await _db.Favourites.FirstOrDefaultAsync(x => x.UserId == Uid && x.TaskId == Tid);
            if (res == null) return false;

            return true;
        }

        public async Task<UTfavourites> GetFavById(string Uid, int Tid)
        {
            return await _db.Favourites.FirstOrDefaultAsync(x => x.UserId == Uid && x.TaskId == Tid);
        }
    }
}