import { useContext, useState } from "react";
import ChatMessages from "./ChatMessages";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";
// import messages from "../../store/messages";
import { ChatContext } from "../../utils/ChatContextProvider";

function Chat() {
  const { activeChatUser } = useContext(ChatContext);
  // const [allMessages, setAllMessages] = useState(activeChatUser.messages);
  // console.log(allMessages);
  const [message, setMessage] = useState("");
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const onEmojiClickHandler = (emojiObject) => {
    setMessage(`${message} ${emojiObject.emoji}`);
  };

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e) => {
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
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <TopBar
        name={activeChatUser.participant.user.name}
        status={activeChatUser.participant.user.status}
        image={activeChatUser.participant.user.image}
      />
      <ChatMessages messages={activeChatUser.messages} />
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
