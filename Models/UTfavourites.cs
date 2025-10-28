using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class UTfavourites
    {
        public string UserId { get; set; }
        public Users? User { get; set; }
        public int TaskId { get; set; }
        public Quests ? Task { get; set; }
    }
}