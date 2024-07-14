import ActiveUserCard from "../cards/ActiveUserCard";
import MultiCarousel from "../MultiCarousel";
import { useLoaderData } from "react-router-dom";

const ActiveUsers = () => {
  const { activeUsers } = useLoaderData();

  return (
    <div className="mt-6">
      <MultiCarousel data={activeUsers} Component={ActiveUserCard} />
    </div>
  );
};

export default ActiveUsers;
