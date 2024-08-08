import { useEffect, useState } from "react";
import { Users } from "../components";
import { User } from "../types";
import { useNavigate } from "react-router-dom";
import userRequests from "../requests/users";
import { useDebounce } from "../hooks/useDebounce";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [citySearch, setCitySearch] = useState("");
  const navigate = useNavigate();
  const search = useDebounce(citySearch, 500);

  useEffect(() => {
    const getUsers = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        search && search.length > 1
          ? setUsers(await userRequests.getAll(token, search))
          : setUsers(await userRequests.getAll(token, ""));
      } else {
        navigate("/");
      }
    };
    getUsers();
  }, [citySearch]);

  if (!users) {
    return <div>No users could be found at the moment</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="p-12">
          <h1>All users</h1>
          <p>You can filter users based on the city they live in</p>
        </div>
        <div className="bg-rose-300 p-5">
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
              <SearchIcon/>
            </IconButton>
          </form>
        </div>
        <div className="flex justify-center">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};
