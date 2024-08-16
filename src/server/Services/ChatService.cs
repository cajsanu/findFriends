using FindFriends.Data;
using FindFriends.Models;
using Microsoft.EntityFrameworkCore;

namespace FindFriends.Services;
public class ChatService(FindFriendsContext context)
{
    private readonly FindFriendsContext _context = context;

    public async Task<Chat> StartChat()
    {
        var chat = new Chat();
        _context.Chats.Add(chat);
        await _context.SaveChangesAsync();
        return chat;
    }

    public async Task SaveMessageAsync(ChatMessage message)
    {
        _context.ChatMessages.Add(message);
        await _context.SaveChangesAsync();
    }


    public async Task<Chat> GetChatAsync(string chatId)
    {
        Chat chat = await _context.Chats
            .Include(c => c.Messages)
            .FirstAsync(c => c.Id == chatId);
        return chat;
    }

    public async Task CreateUserChat(string userId, Chat chat)
    {
        UserChat userchat = new UserChat(userId, chat);
        _context.UserChats.Add(userchat);
        await _context.SaveChangesAsync();
    }

    public async Task AddChatMessage(Chat chat, ChatMessage chatMessage)
    {
        Console.WriteLine();
        chat.Messages.Add(chatMessage);
        await _context.SaveChangesAsync();
    }
}
