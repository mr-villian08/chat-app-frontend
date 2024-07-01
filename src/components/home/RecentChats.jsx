import recentChats from "../../store/home/recentChats";
import RecentChatsCard from "../cards/RecentChatsCard";

const RecentChats = () => {
  return (
    <div className="px-2 relative">
      <h5 className="font-semibold mb-3">Recent</h5>
      <div className="w-full h-screen absolute max-w-sm mx-auto bg-gray-900 text-gray-200 overflow-hidden">
        <ul
          className="h-[645px] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {recentChats.map((recentChat) => (
            <RecentChatsCard key={recentChat.id} recentChat={recentChat} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentChats;
