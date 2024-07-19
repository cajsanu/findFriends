using System; 
using System.ComponentModel.DataAnnotations;

namespace FindFriends.Models;


public class Dog(string userId, string name, string breed, string sex)
{
    [Required]
    [MaxLength(100)]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    [Required]
    public string UserId { get; set; } = userId;
    [Required]
    public string Name { get; set; } = name;
    [Required]
    public string Breed { get; set; } = breed;
    [Required]
    public string Sex { get; set; } = sex;
}

