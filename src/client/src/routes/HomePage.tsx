import axios from "axios";
import { useEffect, useState } from "react";
import {
  PersonalInfoForm,
  RequiresAuthentication,
  UserNavBar,
} from "../components";
import { User } from "../types";
import { getCurrentUser } from "../requests/user";
import { useNavigate } from "react-router-dom";
import { ChatsList } from "../components/ChatsList";
import userRequests from "../requests/users";

export const HomePage = () => {
  const [fact, setFact] = useState(null);
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [chats, setChats] = useState([]);
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

  useEffect(() => {
    const getUserChats = async () => {
      if (currentUser) {
        const chats = await userRequests.getUserChats(currentUser.id);
        setChats(chats);
      }
    };
    getUserChats();
  }, [currentUser]);

  const handleSuccessfullInfoUpdate = async () => {
    setCurrentUser(await getCurrentUser());
  };

  if (!currentUser) {
    return <RequiresAuthentication />;
  }

  if (!currentUser.firstName || !currentUser.lastName || !currentUser.city) {
    return (
      <div>
        <PersonalInfoForm
          userId={currentUser.id}
          onSuccess={handleSuccessfullInfoUpdate}
        />
      </div>
    );
  }

  return (
    <div className="font-mono">
      <UserNavBar />
      <div className="felx flex-col justify-center p-10 pb-96 bg-gradient-to-r from-rose-400 to-rose-600">
        <div className="">
          <div className="flex flex-row justify-around">
            <div className="w-3/4">
              {currentUser ? <ChatsList chats={chats} /> : null}
            </div>
            <div className="flex justify-center ps-10">
              <div>
                <p className="font-bold text-xl p-5 flex justify-start">
                  Did you know?
                </p>
                <p className="max-w-56 bg-white text-black rounded p-5">
                  {fact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
