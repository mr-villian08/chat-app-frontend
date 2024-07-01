const ChatMessage = ({ message, timestamp, isSender, avatar, name }) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      {!isSender && (
        <div className="flex items-end">
          <span className="flex h-8 w-8 justify-center items-center bg-gray-500 text-center rounded-full mr-3">
            {name.charAt(0).toUpperCase()}
          </span>
          {/* <img
            className="w-10 h-10 rounded-full mr-3"
            src={avatar}
            alt={name}
          /> */}
        </div>
      )}
      <div
        className={`max-w-xs ${
          isSender ? "bg-gray-700" : "bg-purple-600"
        } text-white p-3 rounded-lg`}
      >
        <div>{message}</div>
        <div className="text-xs text-gray-300 mt-2">{timestamp}</div>
      </div>
      {isSender && (
        <div className="flex items-end">
          <span className="flex h-8 w-8 justify-center items-center bg-gray-500 text-center rounded-full ml-3">
            {name.charAt(0).toUpperCase()}
          </span>
          {/* <img
            className="w-10 h-10 rounded-full ml-3"
            src={avatar}
            alt={name}
          /> */}
        </div>
      )}
    </div>
  );
};

const messages = [
  {
    id: 1,
    message: "Good Morning",
    timestamp: "10:00",
    isSender: false,
    avatar: "path-to-avatar-1.jpg",
    name: "Doris Brown",
  },
  {
    id: 2,
    message: "Good morning, How are you? What about our next meeting?",
    timestamp: "10:02",
    isSender: true,
    avatar: "path-to-avatar-2.jpg",
    name: "Patricia Smith",
  },
  {
    id: 3,
    message: "Yeah everything is fine",
    timestamp: "10:05",
    isSender: false,
    avatar: "path-to-avatar-1.jpg",
    name: "Doris Brown",
  },
  {
    id: 4,
    message: "& Next meeting tomorrow 10.00AM",
    timestamp: "10:05",
    isSender: false,
    avatar: "path-to-avatar-1.jpg",
    name: "Doris Brown",
  },
  {
    id: 5,
    message: "Wow that’s great",
    timestamp: "10:06",
    isSender: true,
    avatar: "path-to-avatar-2.jpg",
    name: "Patricia Smith",
  },
  {
    id: 6,
    message: "Wow that’s great",
    timestamp: "10:06",
    isSender: true,
    avatar: "path-to-avatar-2.jpg",
    name: "Patricia Smith",
  },
  {
    id: 7,
    message: "Wow that’s great",
    timestamp: "10:06",
    isSender: false,
    avatar: "path-to-avatar-2.jpg",
    name: "Patricia Smith",
  },
  {
    id: 8,
    message: "Wow that’s great",
    timestamp: "10:06",
    isSender: true,
    avatar: "path-to-avatar-2.jpg",
    name: "Patricia Smith",
  },
  {
    id: 9,
    message: "Wow that’s great",
    timestamp: "10:06",
    isSender: true,
    avatar: "path-to-avatar-2.jpg",
    name: "Patricia Smith",
  },
  {
    id: 10,
    message: "Wow that’s great",
    timestamp: "10:06",
    isSender: false,
    avatar: "path-to-avatar-2.jpg",
    name: "Patricia Smith",
  },
];

const ChatMessages = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="bg-gray-950 text-white p-6 lg:p-4 pb-20 overflow-x-auto mb-6"
        style={{ height: "calc(100vh - 170px)" }}
      >
        <div className="border-b border-gray-700 mb-6 pb-2 text-center text-gray-400">
          <span>Today</span>
        </div>
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.message}
            timestamp={msg.timestamp}
            isSender={msg.isSender}
            avatar={msg.avatar}
            name={msg.name}
          />
        ))}
      </div>
      <div className="mt-4 flex absolute w-full bottom-20 border-t-2 border-gray-700 justify-between p-5">
        <input
          type="text"
          placeholder="Enter Message..."
          className="flex-1 p-3 bg-gray-800 rounded-l-lg outline-none"
        />
        <button className="bg-purple-600 p-3 rounded-r-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-9.568-4.303 4.303 9.568 9.568-4.303a1.5 1.5 0 00-.303-2.963l-4.303-.999a1.5 1.5 0 00-1.414.414z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatMessages;
