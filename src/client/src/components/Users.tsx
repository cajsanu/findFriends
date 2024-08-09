import { User } from "../types";
import { SingleDog } from "../components";

interface UsersProps {
  users: User[];
}

const SingleUser = (user: User) => {
  return (
    <div className="relative border rounded-xl p-6 flex flex-col bg-rose-100">
      <p className="font-bold text-xl text-rose-800 pb-2">
        {user.firstName.toUpperCase()} {user.lastName.toUpperCase()},{" "}
        {user.city}
      </p>
      <div>
        {user.dogs ? (
          user.dogs.length > 0 ? (
            user.dogs.map((d) => <SingleDog key={d.id} dog={d} />)
          ) : (
            <p className="text-stone-800">This owner has no dogs</p>
          )
        ) : null}
      </div>
      <div className="flex justify-end">
        <button className="rounded-md hover:text-rose-900 px-3 py-1.5 text-sm font-semibold text-stone-400">
          Start chat
        </button>
      </div>
    </div>
  );
};

export const Users = ({ users }: UsersProps) => {
  return (
    <div className="flex flex-wrap justify-center py-10 gap-10">
      {users ? users.map((u) => <SingleUser key={u.id} {...u} />) : null}
    </div>
  );
};
