using Microsoft.AspNetCore.Mvc;
using FindFriends.Models;
using FindFriends.Services;
using Microsoft.AspNetCore.Authorization;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatsController(ChatService chatService, UserService userService) : ControllerBase
    {
        private readonly ChatService _chatService = chatService;
        private readonly UserService _userService = userService;

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Chat>> StartChat()
        {
            User user = await _userService.GetCurrentUser();
            Chat newChat = await _chatService.StartChat();
            await _userService.AddChat(user, newChat);
            return Ok(newChat);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Chat>> GetChat(string id)
        {
            Chat chat = await _chatService.GetChatAsync(id);
            return Ok(chat);
        }
    }
}
