import { useState } from "react";
import messages from "../../store/messages";
import ChatMessageCard from "../cards/ChatMessageCard";
import classes from "../../assets/css/ChatMessages.module.css";

const ChatMessages = () => {
  const [message, setMessage] = useState("");

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    messages.push({
      message: message,
      timestamp: "10:22PM",
      isSender: true,
      avatar: "",
      name: "Test",
    });
    setMessage("");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`${classes["chat-container"]} bg-gray-950 p-6 lg:p-4 pb-20 overflow-x-auto mb-6`}
        style={{ height: "calc(100vh - 170px)" }}
      >
        <div className="border-b border-gray-700 mb-6 pb-2 text-center text-gray-400">
          <span>Today</span>
        </div>
        {messages.map((msg) => (
          <ChatMessageCard
            key={msg.id}
            message={msg.message}
            timestamp={msg.timestamp}
            isSender={msg.isSender}
            avatar={msg.avatar}
            name={msg.name}
          />
        ))}
      </div>
      <div className="mt-4 flex absolute w-full bottom-20 border-t-2 border-gray-700 justify-between p-5">
        <form className="flex w-full" onSubmit={sendMessageHandler}>
          <input
            type="text"
            placeholder="Enter Message..."
            value={message}
            className="flex-1 p-3 bg-gray-800 rounded-l-lg outline-none"
            onChange={onChangeMessageHandler}
          />
          <button className="bg-purple-600 p-3 rounded-r-lg" type="submit">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-9.568-4.303 4.303 9.568 9.568-4.303a1.5 1.5 0 00-.303-2.963l-4.303-.999a1.5 1.5 0 00-1.414.414z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatMessages;
