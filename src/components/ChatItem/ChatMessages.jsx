import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import ChatMessageCard from "../cards/ChatMessageCard";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  console.log(messages);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({
      block: "end",
      inline: "end",
    });
  }, [messages]);

  return (
    <div className="relative h-screen">
      <SimpleBar className="h-[calc(100vh-170px)] bg-gray-950 p-6 lg:p-4 pb-20">
        {/* <div className="border-b border-gray-700 mb-6 pb-2 text-center text-gray-400">
          <span>Today</span>
        </div> */}
        {messages.length > 0 &&
          messages.map((msg, index) => (
            <ChatMessageCard
              key={msg.id}
              message={msg.message}
              timestamp={msg.timestamp}
              isSender={msg.isSender}
              avatar={msg.avatar}
              name={msg.name}
              isLastMessage={messages.length === index + 1}
            />
          ))}
        <div ref={messagesEndRef} />
      </SimpleBar>
      {messages.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400">Let&apos;s start the messages</p>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;

ChatMessages.propTypes = {
  messages: PropTypes.array,
};
