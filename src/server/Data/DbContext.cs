using Microsoft.EntityFrameworkCore;
using FindFriends.Models;

namespace FindFriends.Data;

public class FindFriendsContext(DbContextOptions<FindFriendsContext> options) : DbContext(options)
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Dog> Dogs => Set<Dog>();
}