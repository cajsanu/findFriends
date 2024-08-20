using FindFriends.Models;
using FindFriends.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace FindFriends.Services;

public class DogService(FindFriendsContext context)
{
    private readonly FindFriendsContext _context = context;

    public async Task<bool> RemoveDog(string dogId)
    {
        var dog = await _context.Dogs.FindAsync(dogId);

        if (dog == null)
        {
            return false;
        }

        _context.Dogs.Remove(dog);
        await _context.SaveChangesAsync();
        return true;
    }
}