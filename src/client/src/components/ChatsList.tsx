import { BaseChat, User } from "../types";

interface UserChat {
  id: string,
  chat: BaseChat,
  user: User,
  userId?: string,
  chatId?: string,
}

interface ChatsProp {
  chats: UserChat[];
}

interface ChatProp {
  userChat: UserChat;
}

const SingleChat = ({ userChat }: ChatProp) => {
  return (
    <div className="p-2 w-1/4 flex justify-center">
      <a className="text-rose-600 hover:text-rose-800" href={`/chat/${userChat.chat.id}`}>
        <div className="p-5 bg-rose-100 hover:bg-rose-200 rounded-full">Chat with {userChat.user.firstName} {userChat.user.lastName}</div>
      </a>
    </div>
  );
};

export const ChatsList = ({ chats }: ChatsProp) => {
  return (
    <div className="p-10">
      <p className="font-bold text-xl p-5 flex justify-start">Active chats</p>
      {chats ? chats.map((c) => <SingleChat key={c.id} userChat={c} />) : null}
    </div>
  );
};
