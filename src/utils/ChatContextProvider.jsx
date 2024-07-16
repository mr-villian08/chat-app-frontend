import PropTypes from "prop-types";
import { createContext, useState } from "react";
import recentChats from "../store/home/recentChats";
import toast from "react-hot-toast";
import useApis from "../hooks/use-apis";

export const ChatContext = createContext({
  activeChatUser: {},
  onActiveChatUser: () => {},
  onCreateChatRoom: () => {},
});

const ChatContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // ? ********************************************************** Active the chat user from the recent chats ********************************************************** */
  const onActiveChatUserHandler = (id) => {
    setUser(() => recentChats.find((recentChat) => recentChat.id === id));
  };

  // ? ********************************************************** Start the conversation from the contacts ********************************************************** */
  const createChatRoomHandler = async (id) => {
    try {
      const result = await useApis.post("chats", true, { contact_user_id: id });
      if (result.status) {
        return setUser(result.data);
      }
      throw new Error(result.message);
    } catch (error) {
      toast.error(error.message, {
        className: "dark:bg-gray-800 dark:text-white",
      });
    }
  };

  return (
    <ChatContext.Provider
      value={{
        activeChatUser: user,
        onActiveChatUser: onActiveChatUserHandler,
        onCreateChatRoom: createChatRoomHandler,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;

ChatContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
