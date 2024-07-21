import { useContext, useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";
import { ChatContext } from "../../utils/ChatContextProvider";
import toast from "react-hot-toast";
import useApis from "../../hooks/use-apis";
import useEcho from "../../hooks/use-echo";
// import echo from "../../utils/Echo";

function Chat() {
  const { activeChatUser } = useContext(ChatContext);
  const [allMessages, setAllMessages] = useState(activeChatUser.messages);
  const [message, setMessage] = useState("");
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const echo = useEcho();
  const userId = JSON.parse(localStorage.getItem("user"))?.id;

  // ? ***************************************************************************** fetch the messages ***************************************************************************** */
  // const showMessages = async () => {
  //   try {
  //     const result = await useApis.get(`messages/${activeChatUser.id}`);
  //     if (result.status) {
  //       setAllMessages(result.data);
  //     } else {
  //       throw new Error(result.message);
  //     }
  //   } catch (error) {
  //     toast.error(error.message, {
  //       className: "dark:bg-gray-800 dark:text-white",
  //     });
  //   }
  // };

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
        chat_room_id: activeChatUser.id,
        receiver_id: activeChatUser.participant.id,
        content: message,
      };
      const result = await useApis.post("messages", true, formData);
      if (result.status) {
        // await showMessages();
        if (echo) {
          echo.private(`chat.${userId}`).listen("MessageSent", (event) => {
            const message = { ...event.message, is_sender: event.is_sender };
            console.log(message, "here i am");
            setAllMessages((prevMessages) => [...prevMessages, message]);
          });
        }
        // console.log("here");
        // echo.private(`message`).listen("MessageSent", (e) => {
        //   console.log("here i am");
        //   // setMessages((prevMessages) => [...prevMessages, e.message]);
        //   console.log(e);
        // });

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

  useEffect(() => {
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
    showMessages();
    if (echo) {
      echo
        .private(`chat.${activeChatUser.id}`)
        .listen("MessageEvent", (event) => {
          const message = { ...event.message, is_sender: event.is_sender };
          setAllMessages((prevMessages) => [...prevMessages, message]);
        });
    }
  }, [echo, allMessages]);
  // useEffect(() => {
  //   echo.private(`message`).listen("MessageSent", (e) => {
  //     console.log("here i am");
  //     // setMessages((prevMessages) => [...prevMessages, e.message]);
  //     console.log(e);
  //   });
  // }, []);

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
