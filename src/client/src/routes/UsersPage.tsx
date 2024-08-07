import { Users } from "../components";

export const UsersPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="p-12">
          <h1>All users</h1>
          <p>You can filter users based on the city they live in</p>
        </div>
        <div className="bg-rose-300 p-5">Here will be a search bar</div>
        <div className="flex justify-center">
          <Users />
        </div>
      </div>
    </div>
  );
};
