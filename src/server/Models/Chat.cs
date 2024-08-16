using System.ComponentModel.DataAnnotations;

namespace FindFriends.Models;


public class Chat
{
    public Chat()
    {
        ChatName = string.Empty;
    }
    public Chat(string Id)
    {
        this.Id = Id;
        ChatName = string.Empty;
    }
    
    [Required]
    [MaxLength(100)]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string ChatName { get; set; }
    public List<ChatMessage> Messages { get; } = new();
}

