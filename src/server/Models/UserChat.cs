using System.ComponentModel.DataAnnotations;

namespace FindFriends.Models;


public class UserChat(string userId, string chatId)
{
    [Required]
    [MaxLength(100)]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    [Required]
    public string UserId { get; set; } = userId;
    [Required]
    public string ChatId { get; set; } = chatId;
}

