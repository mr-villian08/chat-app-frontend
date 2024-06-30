import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ChatItem from "./ChatItem";
import ChatContextProvider from "../../utils/ChatContextProvider";

const RootLayout = () => {
  return (
    <ChatContextProvider>
      <div className="flex">
        <Sidebar />
        <main className="min-w-[380px] max-w-[380px] dark:bg-gray-900">
          <Outlet />
        </main>
        <ChatItem />
      </div>
    </ChatContextProvider>
  );
};

export default RootLayout;
