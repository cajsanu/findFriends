using Microsoft.AspNetCore.SignalR;

namespace FindFriends.Hubs;

public class ChatHub : Hub
{
    public async Task NewMessage(string message) =>
        await Clients.All.SendAsync("messageReceived", message);
}