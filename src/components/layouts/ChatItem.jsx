import { useContext } from "react";
import { ChatContext } from "../../utils/ChatContextProvider";
import TopBar from "../ChatItem/TopBar";
import ChatMessages from "../ChatItem/ChatMessages";

const ChatItem = () => {
  const { activeChatUser } = useContext(ChatContext);

  return (
    <div className="dark:bg-gray-950 w-full relative">
      {Object.keys(activeChatUser).length !== 0 && (
        <>
          <TopBar />
          <ChatMessages />
        </>
      )}
      {Object.keys(activeChatUser).length === 0 &&
        "Click the person name to start a chat!"}
    </div>
  );
};

export default ChatItem;
