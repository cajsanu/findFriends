using FindFriends.Models;

namespace FindFriends.Data;

public static class DbInitialiser
{
    public static void Initialise(FindFriendsContext context)
    {
        if (context.Users.Any()
                && context.Dogs.Any())
        {
            return;
        }

        var user1 = new User
        {
            UserName = "user1@example.com",
            Email = "user1@example.com",
            FirstName = "John",
            LastName = "Doe",
            City = "New York"
        };
        var ownerid1 = user1.Id;
        user1.Dogs.Add(new Dog(ownerid1, "Samuel", "Shiba Inu", "male"));

        var user2 = new User
        {
            UserName = "user2@example.com",
            Email = "user2@example.com",
            FirstName = "Jane",
            LastName = "Smith",
            City = "Los Angeles"
        };
        var ownerid2 = user2.Id;
        user2.Dogs.Add(new Dog(ownerid2, "Carl", "Dalmatian", "female"));
        user2.Dogs.Add(new Dog(ownerid2, "Roomba", "Shitzu", "female"));

         List<User> users = [user1, user2];

        context.Users.AddRange(users);

        context.SaveChanges();

    }
}