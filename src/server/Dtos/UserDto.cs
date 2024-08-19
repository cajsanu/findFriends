using FindFriends.Models;

namespace FindFriends.Dtos;

public class UserDto
{
    public string Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string City { get; set; }
    public List<Dog> Dogs { get; set; }
}