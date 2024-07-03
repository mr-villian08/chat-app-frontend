import { useState } from "react";
import ChatMessages from "./ChatItem/ChatMessages";
import SendMessage from "./ChatItem/SendMessage";
import TopBar from "./ChatItem/TopBar";
import messages from "../store/messages";

function Chat() {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState(messages);

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();

    setAllMessages((prevMessages) => [
      ...prevMessages,
      {
        id: messages.at(-1).id + 1,
        message: message,
        timestamp: "10:22PM",
        isSender: true,
        avatar: "",
        name: "Test",
      },
    ]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <TopBar />
      <ChatMessages messages={allMessages} />
      <SendMessage
        onChangeMessageHandler={onChangeMessageHandler}
        message={message}
        sendMessageHandler={sendMessageHandler}
      />
    </div>
  );
}

export default Chat;
