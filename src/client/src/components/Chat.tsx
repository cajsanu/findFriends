import { useState } from "react";
import * as signalR from "@microsoft/signalr";

export const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessages, setOutputMessages] = useState<string[]>([]);

  const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

  connection.start().catch((err) => console.error(err.toString()));

  connection.on("RecieveMessage", (message: string) => {
    setOutputMessages((prevMesages) => [...prevMesages, message]);
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
    <div className="p-10">
      <form onSubmit={sendMessage}>
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
      <div>
        {outputMessages.map((m) => (
          <p>{m}</p>
        ))}
      </div>
    </div>
  );
};
