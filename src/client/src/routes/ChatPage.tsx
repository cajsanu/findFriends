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
        <UserNavBar user={currentUser} />
      </div>
      <div className="p-10">
        <div className="bg-rose-100">
          <div className="text-rose-900">Chat with {otherUser.firstName}</div>
          <Chat chat={chat} />
        </div>
      </div>
    </div>
  );
};
