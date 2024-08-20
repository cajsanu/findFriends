using Microsoft.AspNetCore.Mvc;
using FindFriends.Models;
using FindFriends.Services;
using Microsoft.AspNetCore.Authorization;
using FindFriends.Dtos;

namespace FindFriends.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DogsController(DogService dogService) : ControllerBase
    {
        private readonly DogService _dogService = dogService;

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult> RemoveDog(string id)
        {
            if (await _dogService.RemoveDog(id))
            {
                return Ok();
            }
            return NotFound();
        }
    }
}