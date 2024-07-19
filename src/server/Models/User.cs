using System; 

namespace FindFriends.Models;

public class User(string firstName, string lastName, string city)
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string FirstName { get; set; } = firstName;
    public string LastName { get; set; } = lastName;
    public string City { get; set; } = city;
    public bool IsAdmin { get; } = false;
    public List<Dog> Dogs { get; } = new();

}