using System; 
using FindFriends.Models;

namespace FindFriends.Models;

public class Dog(string ownerId, string Name, string breed, string sex)
{
    public string Id { get; } = Guid.NewGuid().ToString();
    public string OwnerId { get; } = ownerId;
    public string Name { get; } = Name;
    public string Breed { get; } = breed;
     public string Sex { get; } = sex;
   

}