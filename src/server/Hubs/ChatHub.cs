using Microsoft.AspNetCore.SignalR;

namespace FindFriends.Hubs;

public class ChatHub : Hub
{
    public async Task SendMessage(string message)
    {
        Console.WriteLine(message + "!!!!!!!!!!");
        await Clients.All.SendAsync("RecieveMessage", message);
    }
        
}