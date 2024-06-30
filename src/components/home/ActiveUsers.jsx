import ActiveUserCard from "../cards/ActiveUserCard";
import activeUsers from "../../store/home/activeUsers";
import MultiCarousel from "../MultiCarousel";

const ActiveUsers = () => {
  return (
    <div className="mt-6 container mx-auto">
      <MultiCarousel data={activeUsers} Component={ActiveUserCard} />
    </div>
  );
};

export default ActiveUsers;
