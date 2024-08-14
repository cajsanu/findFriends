import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChatById } from "../requests/chats";
import { Chat } from "../types";

export const ChatPage = () => {
  const { id } = useParams();
  const [chat, setChat] = useState<Chat>(null);

  useEffect(() => {
    const getChat = async () => {
      const chat = await getChatById(id);
      setChat(chat);
    };
    getChat();
  }, []);

  if (!chat) {
    return null;
  }

  return (
    <div>
      <div>{chat.id}</div>
      {chat ? chat.messages.map((m) => <li>{m}</li>) : null}
    </div>
  );
};
