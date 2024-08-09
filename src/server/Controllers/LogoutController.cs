using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using FindFriends.Models;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class LogoutController(SignInManager<User> signInManager) : ControllerBase
    {
        private readonly SignInManager<User> _signInManager = signInManager;

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            return Ok(new { message = "User logged out successfully." });
        }
    }
}


