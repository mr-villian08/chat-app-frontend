import PropTypes from "prop-types";
import SenderCard from "./ChatMessage/SenderCard";
import ReceiverCard from "./ChatMessage/ReceiverCard";

const ChatMessageCard = ({
  message,
  timestamp,
  isSender,
  avatar,
  name,
  isLastMessage,
}) => {
  return (
    <>
      {isSender && (
        <SenderCard
          name={name}
          message={message}
          timestamp={timestamp}
          isLastMessage={isLastMessage}
        />
      )}

      {!isSender && (
        <ReceiverCard
          name={name}
          avatar={avatar}
          message={message}
          timestamp={timestamp}
          isLastMessage={isLastMessage}
        />
      )}
    </>
    // <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
    //   {!isSender && (
    //     <div className="flex items-end">
    //       {/* <span className="flex h-8 w-8 justify-center items-center bg-gray-500 text-center rounded-full mr-3">
    //         {name.charAt(0).toUpperCase()}
    //       </span> */}
    //       <img
    //         className="w-8 h-8 object-cover rounded-full mr-3"
    //         src={avatar}
    //         alt={name}
    //       />
    //     </div>
    //   )}
    //   <div
    //     className={`max-w-xs ${
    //       isSender ? "bg-gray-700" : "bg-purple-600"
    //     } text-white p-3 rounded-lg`}
    //   >
    //     <div>{message}</div>
    //     <div className="text-xs text-gray-300 mt-2">{timestamp}</div>
    //   </div>
    //   {isSender && (
    //     <div className="flex items-end">
    //       <span className="flex h-8 w-8 justify-center items-center bg-gray-500 text-center rounded-full ml-3">
    //         {name.charAt(0).toUpperCase()}
    //       </span>
    //       {/* <img
    //       className="w-10 h-10 rounded-full ml-3"
    //       src={avatar}
    //       alt={name}
    //     /> */}
    //     </div>
    //   )}
    // </div>
  );
};

export default ChatMessageCard;

ChatMessageCard.propTypes = {
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isSender: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isLastMessage: PropTypes.bool.isRequired,
};
