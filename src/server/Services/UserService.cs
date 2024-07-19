using System;
using FindFriends.Models;
using FindFriends.Data;
using Microsoft.EntityFrameworkCore;

namespace FindFriends.Services;

public class UserService(FindFriendsContext context)
{
    private readonly FindFriendsContext _context = context;

    public IEnumerable<User> GetAll()
    {
        return [.. _context.Users.AsNoTracking()];
    }

    public User Create(User newUser)
    {
        _context.Users.Add(newUser);
        _context.SaveChanges();
        return newUser;
    }
}
