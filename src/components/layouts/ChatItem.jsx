import { useContext } from "react";
import { ChatContext } from "../../utils/ChatContextProvider";
import Chat from "../ChatItem/Chat";

const ChatItem = () => {
  const { activeChatUser } = useContext(ChatContext);

  return (
    <div className="dark:bg-gray-950 w-full relative">
      {Object.keys(activeChatUser).length !== 0 && <Chat />}
      {Object.keys(activeChatUser).length === 0 &&
        "Click the person name to start a chat!"}
    </div>
  );
};

export default ChatItem;
