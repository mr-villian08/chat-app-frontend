import { useLoaderData } from "react-router-dom";
import ActiveUsers from "../components/home/ActiveUsers";
import Header from "../components/home/Header";
import RecentChats from "../components/home/RecentChats";

const Chats = () => {
  const { activeUsers } = useLoaderData();

  return (
    <div className="p-7">
      <Header />
      <ActiveUsers activeUsers={activeUsers} />
      <RecentChats />
    </div>
  );
};

export default Chats;
