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
        public async Task<ActionResult<Chat>> CreateChat()
        {
            Chat chat = await _chatService.CreateChat();
            return Ok(chat);
        }
    }
}
