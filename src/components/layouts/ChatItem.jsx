import { useContext } from "react";
import { ChatContext } from "../../utils/ChatContextProvider";
// import { Link } from "react-router-dom";

const ChatItem = () => {
  const { activeChatUser } = useContext(ChatContext);

  return (
    <div className="dark:bg-gray-950 w-full overflow-hidden">
      {Object.keys(activeChatUser).length !== 0 && (
        <div className="flex items-center border-b-2 border-gray-700 justify-between p-5 text-white">
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div className="flex items-center text-center ml-3">
              <p className="text-sm font-medium">{activeChatUser.name}</p>
              <span className="text-lg text-green-400 ml-2">●</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="focus:outline-none">
              <svg
                className="h-6 w-6 text-gray-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 21l-5-5m0 0l-5 5m5-5V3"
                />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="h-6 w-6 text-gray-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="h-6 w-6 text-gray-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="h-6 w-6 text-gray-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="h-6 w-6 text-gray-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {Object.keys(activeChatUser).length === 0 &&
        "Click the person name to start a chat!"}
    </div>
  );
};

export default ChatItem;
