using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.db;
using Backend.Models;
using Backend.Repos.Interfaces;
using Backend.Searchers;
using Backend.Sorters;
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

        public async Task<IList<Quests>> GetAllFav(string userid, TaskSort sort, TaskSearch search)
        {
            var Fav = await _db.Favourites
                 .Where(s => s.UserId == userid)
                 .ToListAsync();

            if (!Fav.Any())
                return new List<Quests>();

            var taskIds = Fav.Select(s => s.TaskId).ToList();

            var tasksQuery = _db.Tasks.Where(t => taskIds.Contains(t.Id));

            if (!string.IsNullOrWhiteSpace(sort.SortByCategory))
            {
                tasksQuery = tasksQuery.Where(t => t.taskcategory.Contains(sort.SortByCategory));
            }

            if (!string.IsNullOrWhiteSpace(search.TaskName))
            {
                tasksQuery = tasksQuery.Where(t => t.taskname.Contains(search.TaskName));
            }

            if (!string.IsNullOrWhiteSpace(sort.SortByDifficulty))
            {
                tasksQuery = tasksQuery.Where(t => t.taskdefficulty == sort.SortByDifficulty);
            }

            var filteredTasks = await tasksQuery.ToListAsync();

            var orderedTasks = Fav
                .Where(s => filteredTasks.Any(t => t.Id == s.TaskId))
                .Select(s => filteredTasks.First(t => t.Id == s.TaskId))
                .ToList();

            return orderedTasks;
        }

        public async Task<UTfavourites> GetFavById(string Uid, int Tid)
        {
            return await _db.Favourites.FirstOrDefaultAsync(x => x.UserId == Uid && x.TaskId == Tid);
        }
    }
}