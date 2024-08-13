using System.ComponentModel.DataAnnotations;

namespace FindFriends.Models;


public class ChatMessage(string senderId, string message, string chatId)
{
    [Required]
    [MaxLength(100)]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    [Required]
    public string SenderId { get; set; } = senderId;
    [Required]
    public string ChatId { get; set; } = chatId;
    [Required]
    public string Message { get; set; } = message;
    [Required]
    public DateTime Timestamp { get; set; }
}

