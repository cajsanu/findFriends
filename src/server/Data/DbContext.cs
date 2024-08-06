using Microsoft.EntityFrameworkCore;
using FindFriends.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace FindFriends.Data;

public class FindFriendsContext(DbContextOptions<FindFriendsContext> options) : IdentityDbContext<User>(options)
{
    public DbSet<Dog> Dogs => Set<Dog>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Configure the table name for the User entity
        builder.Entity<User>(entity =>
        {
            entity.ToTable(name: "Users");
        });
    }
}