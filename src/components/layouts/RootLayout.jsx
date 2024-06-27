import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ChatItem from "./ChatItem";

const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-w-[380px] max-w-[380px] dark:bg-gray-900">
        <Outlet />
      </main>
      <ChatItem />
    </div>
  );
};

export default RootLayout;
