import ActiveUserCard from "../cards/ActiveUserCard";
import activeUsers from "../../store/home/activeUsers";
import MultiCarousel from "../MultiCarousel";

const ActiveUsers = () => {
  return (
    <div className="container mx-auto">
      <MultiCarousel data={activeUsers} Component={ActiveUserCard} />
    </div>
  );
};

export default ActiveUsers;
