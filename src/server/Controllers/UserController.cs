using Microsoft.AspNetCore.Mvc;
using FindFriends.Models;
using FindFriends.Services;
using Microsoft.AspNetCore.Authorization;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController(UserService userService) : ControllerBase
    {
        private readonly UserService _userService = userService;

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<User>> GetUser()
        {
            var user = await _userService.GetUser();
            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return null;
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<bool>> UpdateUserInfo(string id, [FromBody] UserInfoDto info)
        {
            var user = await _userService.GetUser();
            if (user != null && user.Id == id)
            {
                return await _userService.UpdateUserInfo(user, info.FirstName, info.LastName, info.City);
            }
            else
            {
                return NotFound();
            }
        }

        public class UserInfoDto
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string City { get; set; }
        }
    }
}
