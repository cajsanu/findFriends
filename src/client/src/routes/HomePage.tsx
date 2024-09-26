import axios from "axios";
import { useEffect, useState } from "react";
import {
  PersonalInfoForm,
  RequiresAuthentication,
  UserNavBar,
} from "../components";
import { ChatsList } from "../components/ChatsList";
import userRequests from "../requests/users";
import { Pets } from "@mui/icons-material";
import { useCurrentUser } from "../hooks/useCurrentUser";

export const HomePage = () => {
  const [fact, setFact] = useState(null);
  const [chats, setChats] = useState([]);

  const { currentUser } = useCurrentUser();

  useEffect(() => {
    const getDogFact = async () => {
      const res = await axios.get("https://dogapi.dog/api/facts");
      setFact(res.data.facts);
    };
    getDogFact();
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
    window.location.reload();
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
              {chats.length > 0 ? (
                <ChatsList chats={chats} />
              ) : (
                <div className="font-semibold hover:text-rose-900">
                  <a href="/users">
                    Find someone to go for a walk with! <br />
                    <Pets />
                    <Pets />
                    <Pets />
                  </a>
                </div>
              )}
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
