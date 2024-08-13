using Microsoft.AspNetCore.SignalR;
using FindFriends.Services;
using FindFriends.Models;

namespace FindFriends.Hubs;

public class ChatHub(ChatService chatService) : Hub
{
    private readonly ChatService _chatService = chatService;

    public async Task SendPrivateMessage(string message, string chatId)
    {
        Console.WriteLine("!!!!!!" + message);
        var userId = Context.UserIdentifier;
        // var chat = await _chatService.GetChatAsync(chatId);

        var chatMessage = new ChatMessage(senderId: userId, message: message, chatId: chatId);
        await _chatService.SaveMessageAsync(chatMessage);

        // await _chatService.CreateUserChat(userId, chat.id);

        await Clients.Caller.SendAsync("ReceivePrivateMessage", Context.UserIdentifier, message);

    }

}