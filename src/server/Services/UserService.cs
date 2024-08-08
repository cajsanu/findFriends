using FindFriends.Models;
using FindFriends.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Linq;

namespace FindFriends.Services;

public class UserService(FindFriendsContext context, UserManager<User> userManager, IHttpContextAccessor contextAccessor)
{
    private readonly FindFriendsContext _context = context;
    private readonly UserManager<User> _userManager = userManager;
    private readonly IHttpContextAccessor _contextAccessor = contextAccessor;

    public List<User> GetAll(string? searchString)
    {
        var users = from u in _context.Users
                    select u;    

        if (!String.IsNullOrEmpty(searchString))
        {
            users = users.Where(u => u.City.Contains(searchString));
        }

        return [.. users
            .AsNoTracking()
            .Include(u => u.Dogs)];

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
