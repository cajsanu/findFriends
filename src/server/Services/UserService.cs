using FindFriends.Models;
using FindFriends.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.OpenApi.Extensions;

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
        if (_contextAccessor.HttpContext?.User.Identity?.IsAuthenticated ?? false)
        {

            var userId = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId != null)
            {
                var user = await _context.Users.FindAsync(userId);
                return user;
            }
        }
        return null;
    }

    public async Task<bool> UpdateUserInfo(User user, string firstName, string lastName, string city)
    {
        user.FirstName = firstName;
        user.LastName = lastName;
        user.City = city;
        var res = await _userManager.UpdateAsync(user);
        return res.Succeeded;
    }
}
