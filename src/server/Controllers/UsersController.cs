using System;
using Microsoft.AspNetCore.Mvc;
using FindFriends.Models;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {

        [HttpGet]
        public IActionResult Get()
        {
          
            return Ok();
        }
    }
}
