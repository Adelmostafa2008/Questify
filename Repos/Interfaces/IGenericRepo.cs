using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Repos.Interfaces
{
    public interface IGenericRepo<T> where T : class
    {
        Task<IList<T>> GetAll();
        Task<T> GetById(int id);
        Task Delete(T entity);
        Task Update(T entity);
        Task Create(T entity);
        Task Save();

    }
}