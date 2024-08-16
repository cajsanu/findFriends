import axios from "axios";
import { useEffect, useState } from "react";
import { UserNavBar, Chat } from "../components";
import { User } from "../types";
import { getCurrentUser } from "../requests/user";
import { useNavigate } from "react-router-dom";
import { ChatsList } from "../components/ChatsList";

export const HomePage = () => {
  const [fact, setFact] = useState(null);
  const [currentUser, setCurrentUser] = useState<User>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDogFact = async () => {
      const res = await axios.get("https://dogapi.dog/api/facts");
      setFact(res.data.facts);
    };
    const getUser = async () => {
      const user = await getCurrentUser();
      user ? setCurrentUser(user) : navigate("/");
    };
    getDogFact();
    getUser();
  }, []);

  console.log(currentUser)

  return (
    <div className="font-mono">
      <UserNavBar user={currentUser}/>
      <div className="felx flex-col justify-center p-10 bg-gradient-to-r from-rose-400 via-rose-700 to-rose-400">
        <div className="flex flex-row justify-around p-10">
          <div className="flex justify-end">
            <div className="">
              <p>Did you know?</p>
              <p className="max-w-56 bg-white text-black rounded p-5">{fact}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {currentUser ? <ChatsList chats={currentUser.userChats.map(userChat => userChat.chat)} /> : null}
      </div>
    </div>
  );
};
