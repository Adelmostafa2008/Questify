using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace Backend.db
{
    public class AppDb : IdentityDbContext<Users>
    {
        public AppDb(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole {
                    Name = "User",
                    NormalizedName = "USER"
                },
                new IdentityRole {
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                }
            };

            builder.Entity<IdentityRole>().HasData(roles);

            builder.Entity<UTsubmission>()
            .HasKey(s => new { s.UserId, s.TaskId });

        }

        public DbSet<Tasks> Tasks { get; set; }
        public DbSet<Scenarios> Scenarios { get; set; }
        public DbSet<UTsubmission> Submissions { get; set; }
    }

    
}