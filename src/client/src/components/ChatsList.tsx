import { BaseChat, User } from "../types";

interface UserChat {
  id: string;
  chat: BaseChat;
  user: User;
  userId?: string;
  chatId?: string;
}

interface ChatsProp {
  chats: UserChat[];
}

interface ChatProp {
  userChat: UserChat;
}

const SingleChat = ({ userChat }: ChatProp) => {
  return (
    <div className="p-2 flex justify-start">
      <a
        href={`/chat/${userChat.chat.id}`}
      >
        <div className="p-5 text-red-900 bg-rose-100 hover:bg-rose-200 font-semibold rounded-md">
          {userChat.user.firstName} {userChat.user.lastName}
        </div>
      </a>
    </div>
  );
};

export const ChatsList = ({ chats }: ChatsProp) => {
  if (chats.length < 1) {
    return null;
  }

  return (
    <div className="">
      <p className="font-bold text-xl p-5 flex justify-start">Active chats</p>
      <div className="flex flex-col">
        {chats
          ? chats.map((c) => <SingleChat key={c.id} userChat={c} />)
          : null}
      </div>
    </div>
  );
};
