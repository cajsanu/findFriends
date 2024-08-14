using FindFriends.Models;
using FindFriends.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace FindFriends.Services;

public class UserService(FindFriendsContext context, UserManager<User> userManager, IHttpContextAccessor contextAccessor)
{
    private readonly FindFriendsContext _context = context;
    private readonly UserManager<User> _userManager = userManager;
    private readonly IHttpContextAccessor _contextAccessor = contextAccessor;

    public async Task<IEnumerable<User>> GetAll(string? search)
    {
        if (string.IsNullOrWhiteSpace(search))
        {
            return await _context.Users
                .Include(u => u.Dogs)
                .Include(u => u.Chats)
                .ToListAsync();
        }

        return await _context.Users
            .Where(u => u.City.ToLower().Contains(search.ToLower()))
            .Include(u => u.Dogs)
            .Include(u => u.Chats)
            .ToListAsync();
    }

    public async Task<User> GetCurrentUser()
    {
        if (_contextAccessor.HttpContext?.User.Identity?.IsAuthenticated ?? false)
        {

            var userId = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId != null)
            {
                var user = await _context.Users
                .Include(u => u.Dogs)
                .Include(u => u.Chats)
                .FirstOrDefaultAsync(u => u.Id == userId);

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

    public async Task<Dog> AddUserDog(User user, string dogName, string breed, string sex)
    {
        Console.WriteLine(dogName + breed + sex);
        user.Dogs.Add(new Dog(user.Id, dogName, breed, sex));
        await _userManager.UpdateAsync(user);
        return null;
    }
}
