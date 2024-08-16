using System.ComponentModel.DataAnnotations;

namespace FindFriends.Models;


public class UserChat
{
    public UserChat(string userId, string chatId)
    {
        UserId = userId;
        Chat = new(chatId);
    }
    public UserChat(string userId, Chat chat) {
        UserId = userId;
        Chat = chat;
    }

    [Required]
    [MaxLength(100)]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    [Required]
    public string UserId { get; set; }
    [Required]
    public Chat Chat { get; set; }
}

