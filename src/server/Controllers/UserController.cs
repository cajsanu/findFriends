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
        public ActionResult<User> GetUser()
        {
            var user = _userService.GetUser();
            if (user != null){
                return Ok(user);
            } else {
                return null;
            }
        }
    }
}
