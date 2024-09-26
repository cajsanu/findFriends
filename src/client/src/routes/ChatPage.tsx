import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChatById } from "../requests/chats";
import { BaseChat } from "../types";
import { Chat, UserNavBar } from "../components";
import { useCurrentUser } from "../hooks/useCurrentUser";

interface OtherUser {
  firstName: string;
  city: string;
}

export const ChatPage = () => {
  const { id } = useParams();
  const [chat, setChat] = useState<BaseChat | null>(null);
  const [otherUser, setOtherUser] = useState<OtherUser | null>(null);
  useCurrentUser();

  useEffect(() => {
    const getChat = async () => {
      if (id) {
        const chatData = await getChatById(id);
        setChat(chatData.chat);
        setOtherUser({ firstName: chatData.firstName, city: chatData.city });
      }
    };
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
              Chat with {otherUser?.firstName}
            </p>
            <p className="text-rose-900 text-sm flex justify-start font-semibold">
              who lives in {otherUser?.city}
            </p>
          </div>
          <Chat chat={chat} />
        </div>
      </div>
    </div>
  );
};
