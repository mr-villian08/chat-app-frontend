import PropTypes from "prop-types";
import { createContext, useState } from "react";
import recentChats from "../store/home/recentChats";

export const ChatContext = createContext({
  activeChatUser: {},
  onActiveChatUser: () => {},
});

const ChatContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const onActiveChatUserHandler = (id) => {
    setUser(() => recentChats.find((recentChat) => recentChat.id === id));
  };

  return (
    <ChatContext.Provider
      value={{
        activeChatUser: user,
        onActiveChatUser: onActiveChatUserHandler,
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
