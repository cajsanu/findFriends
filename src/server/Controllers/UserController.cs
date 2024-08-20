using Microsoft.AspNetCore.Mvc;
using FindFriends.Services;
using Microsoft.AspNetCore.Authorization;
using FindFriends.Dtos;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController(UserService userService) : ControllerBase
    {
        private readonly UserService _userService = userService;

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<UserDto>> GetUser()
        {
            var user = await _userService.GetCurrentUser();
            if (user != null)
            {
                var userDto = new UserDto
                {
                    Id = user.Id,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    City = user.City,
                    Dogs = user.Dogs,
                };
                return Ok(userDto);
            }
            else
            {
                return null;
            }
        }
    }
}
