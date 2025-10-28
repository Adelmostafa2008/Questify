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

            builder.Entity<UTfavourites>()
            .HasKey(s => new { s.UserId, s.TaskId });

            builder.Entity<Quests>().HasKey(x => x.Id);

            builder.Entity<Quests>().HasMany(x => x.users).WithOne(x => x.task).HasForeignKey(x =>x.TaskId).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Users>().HasMany(x => x.tasks).WithOne(x => x.user).HasForeignKey(x => x.UserId).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Quests>().HasMany(x => x.favouredByUsers).WithOne(x => x.Task).HasForeignKey(x =>x.TaskId).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Users>().HasMany(x => x.favouriteTasks).WithOne(x => x.User).HasForeignKey(x => x.UserId).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Quests>().HasMany(x => x.scenarios).WithOne(x => x.Task).HasForeignKey(x => x.TaskId).OnDelete(DeleteBehavior.Cascade);

        }

        public DbSet<Quests> Tasks { get; set; }
        public DbSet<Scenarios> Scenarios { get; set; }
        public DbSet<UTsubmission> Submissions { get; set; }
        public DbSet<UTfavourites> Favourites { get; set; }
    }

    
}