import PropTypes from "prop-types";
import ActiveUserCard from "../cards/ActiveUserCard";
import MultiCarousel from "../MultiCarousel";

const ActiveUsers = ({ activeUsers }) => {
  return (
    <div className="mt-6">
      <MultiCarousel data={activeUsers} Component={ActiveUserCard} />
    </div>
  );
};

export default ActiveUsers;

ActiveUsers.propTypes = {
  activeUsers: PropTypes.object.isRequired,
};
