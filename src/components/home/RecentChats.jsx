import { Suspense } from "react";
import RecentChatsCard from "../cards/RecentChatsCard";
import { Await, useLoaderData } from "react-router-dom";

const RecentChats = () => {
  const { recentChats } = useLoaderData();

  return (
    <div className="px-2 relative">
      <h5 className="font-semibold mb-3">Recent</h5>
      <div className="w-full h-screen absolute max-w-sm mx-auto bg-gray-900 text-gray-200 overflow-hidden">
        <ul
          className="h-[645px] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={recentChats}>
              {(loadedRecentChats) =>
                loadedRecentChats.map((recentChat) => (
                  <RecentChatsCard
                    key={recentChat.id}
                    recentChatId={recentChat.id}
                    recentChat={recentChat.last_message}
                    contactUser={recentChat.contact_user}
                  />
                ))
              }
            </Await>
          </Suspense>
        </ul>
      </div>
    </div>
  );
};

export default RecentChats;
