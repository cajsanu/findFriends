import { useState } from "react";
import * as signalR from "@microsoft/signalr";
import { BaseChat } from "../types";

interface ChatProps {
  chat: BaseChat;
}

export const Chat = ({ chat }: ChatProps) => {
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessages, setOutputMessages] = useState<string[]>([]);

  console.log(chat);

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
    <div className="p-10">
      <div>
        {chat ? chat.messages.map((m) => <p key={m.id}>{m.message}</p>) : null}
        {outputMessages.map((m) => (
          <p>{m}</p>
        ))}
      </div>
      <form onSubmit={sendPrivateMessage}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          className="bg-white text-black"
        />
        <button type="submit" className="bg-rose-900">
          Send
        </button>
      </form>
    </div>
  );
};
