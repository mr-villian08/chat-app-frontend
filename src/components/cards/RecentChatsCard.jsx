import PropTypes from "prop-types";
// import imageIcon from "../../assets/images/icons/image.svg";
import { useContext } from "react";
import { ChatContext } from "../../utils/ChatContextProvider";
const commonClasses = `flex items-center p-4 w-full cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out`;

const RecentChatsCard = ({ recentChatId, recentChat, contactUser }) => {
  const { onCreateChatRoom, activeChatUser } = useContext(ChatContext);

  return (
    <li
      key={recentChatId}
      className={`${
        activeChatUser.id === recentChatId
          ? `${commonClasses} bg-gray-800`
          : commonClasses
      }`}
      onClick={() => onCreateChatRoom(contactUser.id)}
    >
      <div className="relative">
        {contactUser.image !== null && (
          <img
            className="w-[35px] h-[35px] object-cover rounded-full"
            src={contactUser.image}
            alt={contactUser.name}
          />
        )}
        {contactUser.image === null && (
          <span className="flex h-10 w-10 justify-center items-center bg-gray-500 text-center rounded-full mr-3">
            {contactUser.name.charAt(0).toUpperCase()}
          </span>
        )}

        {contactUser.status === "ONLINE" && (
          <div className="p-1 w-0.5 h-0.5 absolute right-2 border-2 border-black bottom-0.5 rounded-full bg-green-500"></div>
        )}
      </div>
      <div className="flex-1 text-left pl-4 leading-7">
        <h5>{contactUser.name}</h5>
        {/* {recentChat.typing && (
          <div className="flex items-center text-xs text-gray-400">
            <span className="">typing</span>
            <div className="ml-1 mt-3 flex space-x-1">
              <span className="w-1 h-1 rounded-full bg-[#0ABD9F] animate-loader"></span>
              <span
                className="w-1 h-1 rounded-full bg-[#0ABD9F] animate-loader"
                style={{ animationDelay: "0.1s" }}
              ></span>
              <span
                className="w-1 h-1 rounded-full bg-[#0ABD9F] animate-loader"
                style={{ animationDelay: "0.2s" }}
              ></span>
            </div>
          </div>
        )} */}
        {/* {!recentChat.typing && ( */}
        <p className="flex text-gray-400 text-xs gap-1">
          {/* {recentChat.isImages && (
            <img src={imageIcon} alt="file" className="w-4 h-4" />
          )} */}
          {recentChat?.content}
        </p>
        {/* )} */}
      </div>
      <div className="flex-col ml-4 text-white text-xs rounded-full flex items-center justify-center">
        <p className="flex flex-row mb-1 text-gray-400">{recentChat?.time}</p>
        {recentChat?.unread && (
          <p className="bg-[#0ABD9F] text-gray-950 mt-1 rounded-full w-4 h-4 flex items-center justify-center">
            {recentChat?.unread}
          </p>
        )}
      </div>
    </li>
  );
};

export default RecentChatsCard;

RecentChatsCard.propTypes = {
  recentChatId: PropTypes.number.isRequired,
  recentChat: PropTypes.object,
  contactUser: PropTypes.object.isRequired,
};
