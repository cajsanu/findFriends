using FindFriends.Models;
using FindFriends.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace FindFriends.Services;

public class UserService(FindFriendsContext context, UserManager<User> userManager, IHttpContextAccessor contextAccessor)
{
    private readonly FindFriendsContext _context = context;
    private readonly UserManager<User> _userManager = userManager;
    private readonly IHttpContextAccessor _contextAccessor = contextAccessor;

    public List<User> GetAll()
    {

        return [.. _context.Users
            .AsNoTracking()
            .Include(u => u.Dogs)];

    }

    public async Task<User> GetUser()
    {
        var userId = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId != null)
        {
            return await _userManager.FindByIdAsync(userId);
        }
        return null;
    }

    public User Create(User newUser)
    {
        _context.Users.Add(newUser);
        _context.SaveChanges();
        return newUser;
    }
}
