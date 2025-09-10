import { useContext, useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";
import { ChatContext } from "../../utils/ChatContextProvider";
import toast from "react-hot-toast";
import useApis from "../../hooks/use-apis";
import useSocket from "../../hooks/use-socket";

function Chat() {
  const { activeChatUser } = useContext(ChatContext);
  const [allMessages, setAllMessages] = useState(activeChatUser.messages);
  const [message, setMessage] = useState("");
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const token = localStorage.getItem("token");
  const { socket, isConnected } = useSocket(userId, token);

  // ? ***************************************************************************** onClick the emoji ***************************************************************************** */
  const onEmojiClickHandler = (emojiObject) => {
    setMessage(`${message} ${emojiObject.emoji}`);
  };

  // ? ***************************************************************************** change the message ***************************************************************************** */
  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  // ? ***************************************************************************** on Send the message ***************************************************************************** */
  const sendMessageHandler = async (e) => {
    try {
      e.preventDefault();
      if (message.length === 0) {
        return;
      }

      const formData = {
        chatId: activeChatUser.chatRoom._id,
        receiver: activeChatUser.participant._id,
        content: message,
      };
      const result = await useApis.post("messages", true, formData);
      if (result.status) {
        setMessage("");
        return result;
      }

      throw new Error(result.message);
    } catch (error) {
      return toast.error(error.message, {
        className: "dark:bg-gray-800 dark:text-white",
      });
    }
  };

  console.log(socket, activeChatUser);

  // Listen for new messages
  useEffect(() => {
    if (!socket || !isConnected || !activeChatUser) return;
    socket.emit("joinRoom", activeChatUser.chatRoom._id);

    socket.on("newMessage", (msg) => {
      setAllMessages((prev) => [
        ...prev,
        {
          ...msg,
          isSender: msg.sender._id === userId, // 👈 compare with logged-in user
        },
      ]);
    });

    return () => socket.off("newMessage");
  }, [socket, activeChatUser, userId, isConnected]);

  // ? ***************************************************************************** Render ***************************************************************************** */
  return (
    <div className="flex flex-col h-screen justify-between">
      <TopBar
        name={activeChatUser.participant.name}
        status={activeChatUser.participant.status}
        image={activeChatUser.participant.image}
      />
      <ChatMessages messages={allMessages} />
      <SendMessage
        onChangeMessageHandler={onChangeMessageHandler}
        message={message}
        sendMessageHandler={sendMessageHandler}
        onEmojiClick={onEmojiClickHandler}
        setIsPickerVisible={setIsPickerVisible}
        isPickerVisible={isPickerVisible}
      />
    </div>
  );
}

export default Chat;
