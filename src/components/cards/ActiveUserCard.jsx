import PropTypes from "prop-types";

const ActiveUserCard = ({ item }) => {
  return (
    <div className="p-2 mt-3">
      <div className="dark:bg-gray-800 relative rounded-lg text-center">
        <div className="h-9 w-9 relative mx-auto -top-4 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src={item.image}
            alt={item.name}
          />
          {/* <div className="p-1 w-0.5 h-0.5 absolute -right-1 border-2 border-black bottom-1 rounded-full bg-green-500"></div> */}
          <div className="p-1 w-0.5 h-0.5 absolute -right-0.5 border-2 border-black bottom-0.5 rounded-full bg-green-500"></div>
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
