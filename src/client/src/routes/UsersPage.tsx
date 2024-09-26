import { useEffect, useState } from "react";
import { RequiresAuthentication, Users, UserNavBar } from "../components";
import { User } from "../types";
import userRequests from "../requests/users";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useCurrentUser } from "../hooks/useCurrentUser";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const { currentUser } = useCurrentUser();

  const [citySearch, setCitySearch] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      citySearch
        ? setUsers(await userRequests.getAll(citySearch))
        : setUsers(await userRequests.getAll(""));
    };
    getUsers();
  }, [citySearch]);

  if (!currentUser) {
    return <RequiresAuthentication />;
  }

  if (!users) {
    return <div>No users could be found at the moment</div>;
  }

  return (
    <div className="font-mono flex justify-center">
      <div className="w-full">
        <UserNavBar />
        <div className="p-12">
          <h1 className="flex justify-center">All registered users</h1>
        </div>
        <div className="p-5 flex justify-center">
          <form className="bg-rose-100 rounded-md">
            <TextField
              id="search-bar"
              className="text"
              value={citySearch}
              onChange={(n) => setCitySearch(n.target.value)}
              label="Enter a city name"
              variant="outlined"
              placeholder="Search..."
              size="small"
              color="secondary"
            />
          </form>
          <div className="pl-2">
            <SearchIcon fontSize="large" />
          </div>
        </div>
        <div className="flex justify-center m-5">
          <Users users={users} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};
