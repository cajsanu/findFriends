import { useState } from "react";
import * as signalR from "@microsoft/signalr";
import { BaseChat, BaseMessage, User } from "../types";
import SendIcon from "@mui/icons-material/Send";
import { useCurrentUser } from "../hooks/useCurrentUser";

interface ChatProps {
  chat: BaseChat;
}

interface MessageProp {
  message: BaseMessage;
}

const Message = ({ message }: MessageProp) => {
  const { currentUser } = useCurrentUser();

  if (currentUser) {
    if (message.senderId == currentUser.id) {
      return (
        <div className="p-2 flex justify-end">
          <p
            style={{ textAlign: "left" }}
            className="bg-pink-600 rounded px-2 py-1.5"
          >
            {message.message}
          </p>
        </div>
      );
    }
  }

  return (
    <div className="p-2 flex justify-start">
      <p
        style={{ textAlign: "left" }}
        className="bg-rose-300 text-stone-800 rounded px-2 py-1.5"
      >
        {message.message}
      </p>
    </div>
  );
};

export const Chat = ({ chat }: ChatProps) => {
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessages, setOutputMessages] = useState<string[]>([]);

  const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

  connection.start().catch((err) => console.error(err.toString()));

  connection.on("ReceivePrivateMessage", (message: string) => {
    setOutputMessages((prevMesages) => [...prevMesages, message]);
  });

  const sendPrivateMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (connection && inputMessage.trim()) {
      try {
        await connection.invoke("SendPrivateMessage", inputMessage, chat.id);
        setInputMessage("");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="h-96 w-full flex flex-col">
          <div className="p-10 flex-1 overflow-y-auto">
            {chat
              ? chat.messages?.map((m) => <Message key={m.id} message={m} />)
              : null}
            {outputMessages.map((m) => (
              <div key={m} className="p-2 flex justify-end">
                <p
                  style={{ textAlign: "left" }}
                  className="bg-pink-600 rounded px-2 py-1.5"
                >
                  {m}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5">
        <form onSubmit={sendPrivateMessage}>
          <div className="flex flex-row">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message here..."
              className="bg-white text-black rounded w-full my-1 ps-5 focus:outline-none focus:ring focus:ring-rose-300"
              color="secondary"
            />
            <div className="ps-2">
              <button
                type="submit"
                className="transition delay-150 justify-center rounded-full bg-rose-300 p-5 text-sm font-semibold leading-6 text-rose-900 hover:bg-rose-200"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
