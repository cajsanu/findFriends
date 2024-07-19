using System; 

namespace FindFriends.Models;


public class Dog(string userId, string name, string breed, string sex)
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string UserId { get; set; } = userId;
    public string Name { get; set; } = name;
    public string Breed { get; set; } = breed;
    public string Sex { get; set; } = sex;
}

