using Microsoft.AspNetCore.SignalR;

namespace FindFriends.Hubs;

public class ChatHub : Hub
{
    public async Task SendMessage(string message)
    {
        await Clients.Caller.SendAsync("RecieveMessage", message);
    }

    public async Task SendPrivateMessage(string user, string message)
    {
        await Clients.User(user).SendAsync("ReceiveMessage", message);
    }

}