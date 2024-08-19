using Microsoft.AspNetCore.Mvc;
using FindFriends.Models;
using FindFriends.Services;
using Microsoft.AspNetCore.Authorization;
using FindFriends.Dtos;

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
        public async Task<ActionResult<Chat>> StartChat([FromBody] RecieverIdDto receiver)
        {
            User user = await _userService.GetCurrentUser();
            Chat newChat = await _chatService.StartChat();
            await _chatService.CreateUserChat(user.Id, newChat);
            await _chatService.CreateUserChat(receiver.ReceiverId, newChat);
            return Ok(newChat);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<ChatAndOtherUserDto>> GetChat(string id)
        {
            Chat chat = await _chatService.GetChatAsync(id);

            User currentUser = await _userService.GetCurrentUser();

            User otherUser = await _chatService.GetOtherUserInChat(currentUser.Id, id);

            var chatAndUserDto = new ChatAndOtherUserDto
            {
                Chat = chat,
                FirstName = otherUser.FirstName,
                City = otherUser.City
            };

            return Ok(chatAndUserDto);
        }
    }
}
