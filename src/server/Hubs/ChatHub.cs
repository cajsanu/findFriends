using Microsoft.AspNetCore.SignalR;
using FindFriends.Services;
using FindFriends.Models;

namespace FindFriends.Hubs;

public class ChatHub(ChatService chatService) : Hub
{
    private readonly ChatService _chatService = chatService;

    public async Task SendPrivateMessage(string message, string chatId)
    {
        var userId = Context.UserIdentifier;

        ChatMessage chatMessage = new ChatMessage(senderId: userId, message: message, chatId: chatId);
        await _chatService.SaveMessageAsync(chatMessage);
        Chat chat = await _chatService.GetChatAsync(chatId);
        await _chatService.AddChatMessage(chat, chatMessage);

        await Clients.Caller.SendAsync("ReceivePrivateMessage", message);

    }

}