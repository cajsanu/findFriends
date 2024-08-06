import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetLoggedinUser } from "../utils/getLoggedinUser";
import { User } from "../types";
import { PersonalInfoForm, SingleDog } from "../components";

export const HomePage = () => {
  const [fact, setFact] = useState(null);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDogFact = async () => {
      const res = await axios.get("https://dogapi.dog/api/facts");
      setFact(res.data.facts);
    };
    const getUser = async () => {
      const user = await GetLoggedinUser();
      user ? setUser(user) : navigate("/");
      console.log(user);
    };
    getDogFact();
    getUser();
  }, []);

  const handleClickUsers = () => {
    navigate("/users");
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };

  const handleAddDog = () => {
    console.log("Woof");
  };

  if (!user) {
    return <>Loading...</>;
  }

  if (!user.firstName || !user.lastName || !user.city) {
    return (
      <div>
        <PersonalInfoForm id={user.id} />
      </div>
    );
  }

  return (
    <div className="felx flex-col justify-center p-10">
      <div className="bg-pink-300 p-5">
        <h1 className="text-rose-900">Welcome {user?.firstName}</h1>
        <div>
          <button
            className="rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-200 hover:text-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            onClick={handleClickUsers}
          >
            See users
          </button>
          <button className="rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-200 hover:text-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
            Start new chat
          </button>
          <button
            onClick={handleLogout}
            className="rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-200 hover:text-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Logout
          </button>
          <button
            onClick={handleAddDog}
            className="rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-200 hover:text-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Add dog
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-around p-10">
        <div className="flex flex-col">
          <p className="bg-white">All chats of user</p>
          <div className="bg-pink-200 p-10">
            <div>
              {user
                ? user.dogs?.map((d) => (
                    <SingleDog
                      key={d.id}
                      name={d.name}
                      breed={d.breed}
                      sex={d.sex}
                      id={d.id}
                      ownerId={d.ownerId}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="">
            <p>Did you know?</p>
            <p className="max-w-56 bg-white text-black rounded p-5">{fact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
