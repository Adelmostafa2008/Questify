using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
        public class UTsubmission
    {
        public string UserId { get; set; }
        public Users ?user { get; set; }
        public int TaskId { get; set; }
        public Quests ?task { get; set; }
        public string SubmittedData { get; set; }
        public DateTime SubmissionDate { get; set; } = DateTime.UtcNow;
    }
}