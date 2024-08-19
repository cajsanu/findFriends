using FindFriends.Models;

namespace FindFriends.Dtos;

public class UserChatDto
{
    public string Id { get; set; }
    public User User { get; set; }
    public Chat Chat { get; set; }
}