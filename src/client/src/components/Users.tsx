import { useEffect, useState } from "react";
import { User } from "../types";
import { getAll } from "../requests/users";

const SingleUser = (user: User) => {
    return (
        <>
        <div>
            <h2>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h2>
            <p>Lives in {user.city}</p>
            <h3>Dogs:</h3>
            <p>Wooof</p>
        </div>
        </>
    )
}

export const Users = () => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        const getUsers = async() => {
          const users = await getAll();
          setUsers(users.data);
        };
        getUsers();
      }, []);

      console.log(users)

    return (
        <>
        <div>
            {users ? users.map(u => (
                <SingleUser key={u.id} {...u}/>
            )) : null}
        </div>
        </>
    )
}