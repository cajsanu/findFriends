using Microsoft.AspNetCore.Mvc;
using FindFriends.Models;
using FindFriends.Services;
using Microsoft.AspNetCore.Authorization;
using FindFriends.Dtos;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UsersController(UserService userService) : ControllerBase
    {
        private readonly UserService _userService = userService;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetAll([FromQuery] string? search)
        {
            var users = await _userService.GetAll(search);

            var userDtos = users.Select(user => new UserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                City = user.City,
                Dogs = user.Dogs,
            }).ToList();

            return Ok(userDtos);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<bool>> UpdateUserInfo(string id, [FromBody] UserInfoDto info)
        {
            User user = await _userService.GetCurrentUser();
            if (user != null && user.Id == id)
            {
                return await _userService.UpdateUserInfo(user, info.FirstName, info.LastName, info.City);
            }
            else
            {
                return NotFound();
            }
        }


        [HttpPost("{id}/dogs")]
        public async Task<ActionResult<Dog>> AddUserDog(string id, [FromBody] NewDogDto newDog)
        {
            var user = await _userService.GetCurrentUser();
            if (user != null && user.Id == id)
            {
                return await _userService.AddUserDog(user, newDog.Name, newDog.Breed, newDog.Sex);
            }
            else
            {
                return null;
            }
        }

        [HttpGet("{id}/chats")]
        [Authorize]
        public async Task<ActionResult<List<UserChat>>> GetUserChats(string id)
        {
            List<UserChat> userChats = await _userService.GetUserChats(id);
            var userChatDtos = userChats.Select(userChat => new UserChatDto
            {
                Id = userChat.Id,
                User = userChat.User,
                Chat = userChat.Chat,
            }).ToList();

            return Ok(userChatDtos);
        }
    }
}
