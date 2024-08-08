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
        public async Task<ActionResult<IEnumerable<User>>> GetAll([FromQuery] string? search)
        {
            var users = await _userService.GetAll(search);
            return Ok(users);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<bool>> UpdateUserInfo(string id, [FromBody] UserInfoDto info)
        {
            var user = await _userService.GetCurrentUser();
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

    }
}
