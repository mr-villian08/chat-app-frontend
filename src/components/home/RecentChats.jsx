import { NavLink } from "react-router-dom";

const RecentChats = () => {
  const chats = [
    {
      id: 1,
      name: "Patrick Hendricks",
      message: "hey! there I'm available",
      time: "02:50 PM",
      status: "online",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
    },
    {
      id: 2,
      name: "Mark Messer",
      message: "Images",
      time: "10:30 AM",
      status: "offline",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
      unread: 2,
    },
    {
      id: 3,
      name: "General",
      message: "This theme is Awesome!",
      time: "2:06 min",
      status: "offline",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
    },
    {
      id: 4,
      name: "Doris Brown",
      message: "typing ...",
      time: "10:05 PM",
      status: "online",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
      typing: true,
    },
    {
      id: 5,
      name: "Designer",
      message: "Next meeting tomorrow 10.00AM",
      time: "2:10 min",
      status: "offline",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
      unread: 1,
    },
    {
      id: 6,
      name: "Steve Walker",
      message: "Admin-A-zip",
      time: "01:16 PM",
      status: "offline",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
    },
    {
      id: 7,
      name: "Albert Rodarte",
      message: "typing ...",
      time: "01:05 PM",
      status: "online",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
      typing: true,
    },
    {
      id: 8,
      name: "Mirta George",
      message: "Yeah, Everything is fine 👍",
      time: "02:50 min",
      status: "offline",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
    },
    {
      id: 9,
      name: "Paul Haynes",
      message: "Good Morning 😁",
      time: "02:50 min",
      status: "offline",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951273.jpg?t=st=1719675451~exp=1719679051~hmac=43f4e53b4a725e028985c0cedf1f509c7a6e9e13d5fc9746fbdd301fc2028597&w=740",
    },
  ];

  return (
    <div className="px-2 relative">
      <h5 className="font-semibold mb-3">Recent</h5>
      <div className="w-full absolute max-w-sm mx-auto bg-gray-900 text-gray-200 overflow-hidden">
        <ul
          className="h-[600px] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="flex items-center p-4 hover:bg-gray-800 transition duration-500 ease-in-out"
            >
              <NavLink to="/" className="flex items-center w-full">
                <div className="relative">
                  <img
                    className="w-[35px] h-[35px] object-cover rounded-full"
                    src={chat.image}
                    alt={chat.name}
                  />
                  <div className="p-1 w-0.5 h-0.5 absolute -right-1 border-2 border-black bottom-1 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-left pl-4">
                  <h5>{chat.name}</h5>
                  <p
                    className={` ${
                      chat.typing ? "text-green-500" : "text-gray-400"
                    } text-xs`}
                  >
                    {chat.message}
                  </p>
                </div>
                <div className="flex-col ml-4 text-white text-xs rounded-full flex items-center justify-center">
                  <p className="mb-1">{chat.time}</p>
                  {chat.unread && (
                    <p className="bg-red-600 mt-1 rounded-full w-4 h-4 flex items-center justify-center">
                      {chat.unread}
                    </p>
                  )}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentChats;
