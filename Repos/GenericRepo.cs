using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.db;
using Backend.Repos.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repos
{
    public class GenericRepo<T> : IGenericRepo<T> where T : class
    {
        protected readonly AppDb _db;

        public GenericRepo(AppDb db)
        {
            _db = db;
        }

        public async Task Create(T entity)
        {
            await _db.Set<T>().AddAsync(entity);
            await _db.SaveChangesAsync();
        }

        public async Task Delete(T entity)
        {
            _db.Set<T>().Remove(entity);
            await _db.SaveChangesAsync();
        }

        public async Task<IList<T>> GetAll()
        {
            return await _db.Set<T>().ToListAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await _db.Set<T>().FindAsync(id);
        }

        public async Task Save()
        {
            await _db.SaveChangesAsync();
        }

        public async Task Update(T entity)
        {
            _db.Set<T>().Update(entity);
            await _db.SaveChangesAsync();
        }
    }
}