import { useEffect, useState } from "react";
import { User } from "../types";
import { getAll } from "../requests/users";
import { SingleDog } from "../components";
import { useNavigate } from "react-router-dom";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

const SingleUser = (user: User) => {
  return (
    <>
      <div>
        <h2>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h2>
        <p>Lives in {user.city}</p>
        <h3>Dogs:</h3>
        {user.dogs ? (
          user.dogs.map((d) => <SingleDog key={d.id} {...d} />)
        ) : (
          <p>This owner has no dogs</p>
        )}
      </div>
    </>
  );
};

export const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        const users = await getAll(token);
        setUsers(users.data);
      } else {
        navigate("/");
      }
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      <div>
        {users ? users.map((u) => <SingleUser key={u.id} {...u} />) : null}
      </div>
    </>
  );
};
