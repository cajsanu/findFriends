import { useState } from "react";
import * as signalR from "@microsoft/signalr";

export const Chat = () => {
  //   const [message, setMessage] = useState("");

  // Create connection
  console.log("before connection");
  const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

  // Start the connection
  connection.start().catch((err) => console.error(err.toString()));

  //Handle receiving messages
  connection.on("ReceiveMessage", ( message: string) => {
    console.log(`${message}`);
    // Add your logic to update the chat UI here
  });

  // Send message
  const sendMessage = (user: string, message: string) => {
    connection
      .invoke("SendMessage", user, message)
      .catch((err) => console.error(err.toString()));
  };

  return (
    <div>
      <p>Chat</p>
      <button></button>
    </div>
  );
};
