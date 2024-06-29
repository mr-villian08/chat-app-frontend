import ActiveUsers from "../components/home/ActiveUsers";
import Header from "../components/home/Header";
import RecentChats from "../components/home/RecentChats";

const Home = () => {
  return (
    <div className="p-7">
      <Header />
      <div className="mt-3">
        <ActiveUsers />
      </div>
      <RecentChats />
    </div>
  );
};

export default Home;
