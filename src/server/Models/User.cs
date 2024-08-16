using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace FindFriends.Models;

public class User : IdentityUser
{
    public User()
    {
        FirstName = string.Empty;
        LastName = string.Empty;
        City = string.Empty;
    }

    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }

    [Required]
    public string City { get; set; }

    [Required]
    public bool IsAdmin { get; } = false;

    public List<Dog> Dogs { get; } = new();
    public List<UserChat> UserChats { get; } = new();
}
