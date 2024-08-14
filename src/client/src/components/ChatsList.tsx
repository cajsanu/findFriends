import { BaseChat } from "../types";

interface ChatsProp {
  chats: BaseChat[];
}

interface ChatProp {
  chat: BaseChat;
}

const SingleChat = ({ chat }: ChatProp) => {
  return (
    <div className="p-2">
      <a className="text-rose-600 hover:text-rose-800" href={`/chat/${chat.id}`}>
        <div className="p-5 bg-rose-100 hover:bg-rose-200 rounded">{chat.id}</div>
      </a>
    </div>
  );
};

export const ChatsList = ({ chats }: ChatsProp) => {
  return (
    <div className="p-10">
      <p className="font-bold text-xl p-5">Active chats</p>
      {chats ? chats.map((c) => <SingleChat key={c.id} chat={c} />) : null}
    </div>
  );
};
