using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Searchers;
using Backend.Sorters;

namespace Backend.Repos.Interfaces
{
    public interface IUTfavouritesRepo : IGenericRepo<UTfavourites>
    {
        Task<bool> CheckFavExists(string Uid, int Tid);
        Task<UTfavourites> GetFavById(string Uid, int Tid);
        Task<IList<Quests>> GetAllFav(string userid , TaskSort taskSort , TaskSearch taskSearch);
    }
}