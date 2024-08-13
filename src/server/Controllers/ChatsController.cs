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
        public ActionResult<Chat> CreateChat()
        {
            Chat chat = _chatService.CreateChat();
            return Ok(chat);
        }
    }
}
