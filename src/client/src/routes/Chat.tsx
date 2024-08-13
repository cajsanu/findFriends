import { useState } from "react";
import * as signalR from "@microsoft/signalr";

export const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

  connection.start().catch((err) => console.error(err.toString()));

  connection.on("RecieveMessage", (message: string) => {
    setOutputMessage(message);
  });

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (connection && inputMessage.trim()) {
      try {
        await connection.invoke("SendMessage", inputMessage);
        setInputMessage("");
      } catch (err) {
        console.error(err.toString());
      }
    }
  };

  return (
    <div>
      <p>Chat</p>
      <p className="bg-white text-black">{outputMessage}</p>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          className="bg-white text-black"
        />
        <button type="submit" className="bg-teal-400">
          Send
        </button>
      </form>
    </div>
  );
};
