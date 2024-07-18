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
            var exampleData = new User("caj", "num", "espoo");
            var ownerid = exampleData.Id;
            exampleData.Dogs.Add(new Dog(ownerid, "hano", "babm", "male"));

            return Ok(exampleData);
        }
    }
}
