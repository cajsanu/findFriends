import { useState } from "react";
import * as signalR from "@microsoft/signalr";
import { BaseChat } from "../types";

interface ChatProps {
  chat: BaseChat;
}

interface MessageProp {
  message: string;
}

const Message = ({ message }: MessageProp) => {
  return (
    <div className="p-2">
      <p className="p-5 bg-pink-200">{message}</p>
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
        console.error(err.toString());
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="bg-white text-black h-96 w-3/4 rounded">
          {chat
            ? chat.messages.map((m) => (
                <Message key={m.id} message={m.message} />
              ))
            : null}
          {outputMessages.map((m) => (
            <Message key={m} message={m} />
          ))}
        </div>
      </div>
      <div className="py-2">
        <form onSubmit={sendPrivateMessage}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className="bg-white text-black rounded px-3 py-1.5 w-3/4"
          />
          <div className="p-2">
            <button
              type="submit"
              className="transition delay-150 justify-center rounded-md bg-rose-300 px-3 py-1.5 text-sm font-semibold leading-6 text-rose-800 hover:bg-rose-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
