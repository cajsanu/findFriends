import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getChatById } from "../requests/chats";
import { BaseChat, User } from "../types";
import { Chat, UserNavBar } from "../components";
import { getCurrentUser } from "../requests/user";

export const ChatPage = () => {
  const { id } = useParams();
  const [chat, setChat] = useState<BaseChat>(null);
  const [currentUser, setCurrentUser] = useState<User>(null);
  const navigate = useNavigate()

  useEffect(() => {
    const getChat = async () => {
      const chat = await getChatById(id);
      setChat(chat);
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
        <UserNavBar user={currentUser}/>
      </div>
      <div>{chat.id}</div>
      {/* {chat ? chat.messages.map((m) => <li key={m.id}>{m}</li>) : null} */}
      <Chat chat={chat} />
    </div>
  );
};
