using Microsoft.AspNetCore.Mvc;
using FindFriends.Models;
using FindFriends.Services;
using Microsoft.AspNetCore.Authorization;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatsController(ChatService chatService) : ControllerBase
    {
        private readonly ChatService _chatService = chatService;

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Chat>> StartChat()
        {
            Chat newChat = await _chatService.StartChat();
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
