import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getChatById } from "../requests/chats";
import { BaseChat, User } from "../types";
import { Chat, UserNavBar } from "../components";
import { getCurrentUser } from "../requests/user";

interface OtherUser {
  firstName: string;
  city: string;
}

export const ChatPage = () => {
  const { id } = useParams();
  const [chat, setChat] = useState<BaseChat>(null);
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [otherUser, setOtherUser] = useState<OtherUser>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getChat = async () => {
      const chatData = await getChatById(id);
      setChat(chatData.chat);
      setOtherUser({ firstName: chatData.firstName, city: chatData.city });
    };
    const getUser = async () => {
      const user = await getCurrentUser();
      user ? setCurrentUser(user) : navigate("/");
    };
    getUser();
    getChat();
  }, []);

  if (!chat) {
    return null;
  }

  return (
    <div>
      <div>
        <UserNavBar />
      </div>
      <div className="flex justify-center pt-10">
        <div className="bg-rose-100 w-2/4 rounded">
          <div className="p-10">
            <p className="text-rose-900 text-xl flex justify-start font-bold">
              Chat with {otherUser.firstName}
            </p>
            <p className="text-rose-900 text-sm flex justify-start font-semibold">
              who lives in {otherUser.city}
            </p>
          </div>
          <Chat chat={chat} />
        </div>
      </div>
    </div>
  );
};
