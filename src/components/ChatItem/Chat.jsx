import { useContext, useState } from "react";
import ChatMessages from "./ChatMessages";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";
// import messages from "../../store/messages";
import { ChatContext } from "../../utils/ChatContextProvider";
import toast from "react-hot-toast";
import useApis from "../../hooks/use-apis";

function Chat() {
  const { activeChatUser } = useContext(ChatContext);
  const [allMessages, setAllMessages] = useState(activeChatUser.messages);
  console.log(activeChatUser.messages);
  const [message, setMessage] = useState("");
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  // ? ***************************************************************************** fetch the messages ***************************************************************************** */
  const showMessages = async () => {
    try {
      const result = await useApis.get(`messages/${activeChatUser.id}`);
      if (result.status) {
        setAllMessages(result.data);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error(error.message, {
        className: "dark:bg-gray-800 dark:text-white",
      });
    }
  };

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
      // setAllMessages((prevMessages) => [
      //   ...prevMessages,
      //   {
      //     id: messages.at(-1).id + 1,
      //     message: message,
      //     timestamp: "10:22PM",
      //     isSender: true,
      //     avatar: "",
      //     name: "Test",
      //   },
      // ]);
      const formData = {
        chat_room_id: activeChatUser.id,
        content: message,
      };
      const result = await useApis.post("messages", true, formData);
      if (result.status) {
        await showMessages();
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

  // ? ***************************************************************************** Render ***************************************************************************** */
  return (
    <div className="flex flex-col h-screen justify-between">
      <TopBar
        name={activeChatUser.participant.user.name}
        status={activeChatUser.participant.user.status}
        image={activeChatUser.participant.user.image}
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
