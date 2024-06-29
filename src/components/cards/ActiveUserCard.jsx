import PropTypes from "prop-types";

const ActiveUserCard = ({ item }) => {
  return (
    <div className="p-2 mt-3">
      <div className="dark:bg-gray-800 relative rounded-lg text-center">
        <div className="w-8 relative mx-auto -top-4 rounded-full">
          <img
            className="w-full rounded-full"
            src={item.image}
            alt={item.name}
          />
          <div className="p-1 w-1 h-1 absolute -right-1 border-2 border-black bottom-1 z-10 rounded-full bg-green-500"></div>
        </div>
        <div className="mb-2 p-1 -mt-3 text-xs font-semibold">{item.name}</div>
      </div>
    </div>
  );
};

export default ActiveUserCard;

ActiveUserCard.propTypes = {
  item: PropTypes.object.isRequired,
};
