import { useState } from "react";
import ChatMessages from "./ChatMessages";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";
import messages from "../../store/messages";

function Chat() {
  const [allMessages, setAllMessages] = useState(messages);
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
        onEmojiClick={onEmojiClickHandler}
        setIsPickerVisible={setIsPickerVisible}
        isPickerVisible={isPickerVisible}
      />
    </div>
  );
}

export default Chat;
