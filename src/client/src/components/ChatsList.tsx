import { useNavigate } from "react-router-dom";
import { BaseChat } from "../types";

interface ChatsProp {
  chats: BaseChat[];
}

interface ChatProp {
  chat: BaseChat;
}

const SingleChat = ({ chat }: ChatProp) => {
  const navigate = useNavigate();

  const handleClickOpenChat = () => {
    navigate(`/chat/${chat.id}`);
  };

  return (
    <div>
      <li>{chat.id}</li>
      <button onClick={handleClickOpenChat}>Chat</button>
    </div>
  );
};

export const ChatsList = ({ chats }: ChatsProp) => {
  return (
    <div>
      <p>Chats</p>
      {chats ? chats.map((c) => <SingleChat key={c.id} chat={c} />) : null}
    </div>
  );
};
