using System; 
using FindFriends.Models;

namespace FindFriends.Models;

public class User(string firstName, string lastName, string city)
{
    public string Id { get; } = Guid.NewGuid().ToString();
    public string FirstName { get; } = firstName;
    public string LastName { get; } = lastName;
    public string City { get; } = city;
    public bool IsAdmin { get; } = false;
    public List<Dog> Dogs { get; } = new();

}