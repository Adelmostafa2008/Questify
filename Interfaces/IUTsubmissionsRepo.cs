using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Searchers;
using Backend.Sorters;

namespace Backend.Interfaces
{
    public interface IUTsubmissionsRepo
    {
        Task<List<UTsubmission>> getAll(string UserId);
        Task<UTsubmission> addSubmissions(string user, int task, string submitteddata);
        Task<List<Tasks>> getLatest(string userid , TaskSort taskSort , TaskSearch taskSearch);
        Task<UTsubmission> getSubmission(string userid, int taskid);
        Task<bool> deleteSubmission(List<UTsubmission> subs);
    }
}