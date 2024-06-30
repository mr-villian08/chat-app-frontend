import PropTypes from "prop-types";
import imageIcon from "../../assets/images/icons/image.svg";
import { useContext } from "react";
import { ChatContext } from "../../utils/ChatContextProvider";
const commonClasses = `flex items-center p-4 w-full cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out`;

const RecentChatsCard = ({ recentChat }) => {
  const { onActiveChatUser, activeChatUser } = useContext(ChatContext);

  return (
    <li
      key={recentChat.id}
      className={`${
        activeChatUser.id === recentChat.id
          ? `${commonClasses} bg-gray-800`
          : commonClasses
      }`}
      onClick={() => onActiveChatUser(recentChat.id)}
    >
      <div className="relative">
        <img
          className="w-[35px] h-[35px] object-cover rounded-full"
          src={recentChat.image}
          alt={recentChat.name}
        />
        <div className="p-1 w-0.5 h-0.5 absolute -right-1 border-2 border-black bottom-1 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 text-left pl-4 leading-7">
        <h5>{recentChat.name}</h5>
        {recentChat.typing && (
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
        )}
        {!recentChat.typing && (
          <p className="flex text-gray-400 text-xs gap-1">
            {recentChat.isImages && (
              <img src={imageIcon} alt="file" className="w-4 h-4" />
            )}
            {recentChat.message}
          </p>
        )}
      </div>
      <div className="flex-col ml-4 text-white text-xs rounded-full flex items-center justify-center">
        <p className="flex flex-row mb-1 text-gray-400">{recentChat.time}</p>
        {recentChat.unread && (
          <p className="bg-[#0ABD9F] text-gray-950 mt-1 rounded-full w-4 h-4 flex items-center justify-center">
            {recentChat.unread}
          </p>
        )}
      </div>
      {/* </NavLink> */}
    </li>
  );
};

export default RecentChatsCard;

RecentChatsCard.propTypes = {
  recentChat: PropTypes.object.isRequired,
};
