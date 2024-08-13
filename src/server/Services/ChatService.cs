using FindFriends.Data;
using FindFriends.Models;
using Microsoft.EntityFrameworkCore;

namespace FindFriends.Services;
public class ChatService(FindFriendsContext context)
{
    private readonly FindFriendsContext _context = context;

    public async Task SaveMessageAsync(ChatMessage message)
    {
        _context.ChatMessages.Add(message);
        await _context.SaveChangesAsync();
    }

    public Chat CreateChat()
    {
        var chat = new Chat();
        return chat;
    }


    // public async Task<Chat> GetChatAsync(string chatId)
    // {
    //     var chat = await _context.Chats.FirstOrDefaultAsync(c => c.Id == chatId);
    //     return chat;
    // }

    //  public async Task CreateUserChat(string userId, string chatId)
    // {
    //     _context.ChatMessages.Add();
    //     await _context.SaveChangesAsync();
    // }
}
