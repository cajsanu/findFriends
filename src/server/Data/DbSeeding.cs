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

        var user1 = new User("Ron", "Hummings", "Espoo");
        var ownerid1 = user1.Id;
        user1.Dogs.Add(new Dog(ownerid1, "Samuel", "Shiba inu", "male"));
        var user2 = new User("Tony", "Stark", "Helsinki");
        var ownerid2 = user2.Id;
        user2.Dogs.Add(new Dog(ownerid2, "Carl", "Dalmatian", "female"));
         var user3 = new User("Clara", "Mulligan", "Espoo");
        var ownerid3 = user3.Id;
        user1.Dogs.Add(new Dog(ownerid3, "Roomba", "Shitzu", "female"));
         var user4 = new User("Pat", "Paddington", "Kuusamo");
        var ownerid4 = user4.Id;
        user1.Dogs.Add(new Dog(ownerid4, "Kalevi", "Mix", "male"));

        List<User> users = [user1, user2, user3, user4];

        context.Users.AddRange(users);
        context.SaveChanges();

    }
}