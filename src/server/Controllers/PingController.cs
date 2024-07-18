using Microsoft.AspNetCore.Mvc;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PingController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("pinged!");
        }
    }
}
