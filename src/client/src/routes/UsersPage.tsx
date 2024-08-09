import { useEffect, useState } from "react";
import { RequiresAuthentication, Users } from "../components";
import { User } from "../types";
import { useNavigate } from "react-router-dom";
import userRequests from "../requests/users";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { getCurrentUser } from "../requests/user";
import { UserNavBar } from "../components/UserNavBar";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loggedinUser, setLoggedinUser] = useState<User | null>(null);

  const [citySearch, setCitySearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      citySearch
        ? setUsers(await userRequests.getAll(citySearch))
        : setUsers(await userRequests.getAll(""));
    };
    const getUser = async () => {
      const user = await getCurrentUser();
      user ? setLoggedinUser(user) : navigate("/");
    };
    getUsers();
    getUser();
  }, [citySearch]);

  if (!loggedinUser) {
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
          <p>Lorem ipsum</p>
        </div>
        <div className="bg-rose-300 p-5 flex justify-center">
          <form>
            <TextField
              id="search-bar"
              className="text"
              value={citySearch}
              onChange={(n) => setCitySearch(n.target.value)}
              label="Enter a city name"
              variant="outlined"
              placeholder="Search..."
              size="small"
              color="error"
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </form>
        </div>
        <div className="flex justify-center m-5">
          <Users users={users} loggedInUser={loggedinUser} />
        </div>
      </div>
    </div>
  );
};
