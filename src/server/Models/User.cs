using System; 
using System.ComponentModel.DataAnnotations;

namespace FindFriends.Models;

public class User(string firstName, string lastName, string city)
{
    [Required]
    [MaxLength(100)]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    [Required]
    public string FirstName { get; set; } = firstName;
    [Required]
    public string LastName { get; set; } = lastName;
    [Required]
    public string City { get; set; } = city;
    [Required]
    public bool IsAdmin { get; } = false;
    public List<Dog> Dogs { get; } = new();

}