import { useEffect, useState } from "react";
import { User } from "../types";
import { getAll } from "../requests/users";
import { SingleDog } from "../components";
import { useNavigate } from "react-router-dom";

const SingleUser = (user: User) => {
  return (
    <div className="border p-5 flex flex-col">
      <p className="font-bold text-xl">
        {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}, {user.city}
      </p>
      <div>
      <p className="font-semibold">Dogs:</p>
      {user.dogs ? (
        user.dogs.map((d) => <SingleDog key={d.id} dog={d} />)
      ) : (
        <p>This owner has no dogs</p>
      )}
      </div>
    </div>
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

  return (
    <div className="w-3/4">
      {users ? users.map((u) => <SingleUser key={u.id} {...u} />) : null}
    </div>
  );
};
