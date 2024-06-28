import ActiveUsers from "../components/home/ActiveUsers";
import Header from "../components/home/Header";

const Home = () => {
  return (
    <div className="p-7">
      <Header />
      <div className="mt-6">
        <ActiveUsers />
      </div>
      <div>simple one</div>
    </div>
  );
};

export default Home;
