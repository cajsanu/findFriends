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
            var user1 = new User("Ron", "Hummings", "Espoo");
            var ownerid1 = user1.Id;
            user1.Dogs.Add(new Dog(ownerid1, "Samuel", "Shiba inu", "male"));
            var user2 = new User("Tony", "Stark", "Helsinki");
            var ownerid2 = user2.Id;
            user2.Dogs.Add(new Dog(ownerid2, "Carl", "Dalmatian", "female"));

            List<User> users = [user1, user2];

            return Ok(users);
        }
    }
}
