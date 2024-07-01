import PropTypes from "prop-types";

const SenderCard = ({ name, message, timestamp }) => {
  return (
    <div className="flex justify-end w-full mb-4">
      <div className="max-w-xs bg-gray-700 p-1 rounded-lg">
        <div>{message}</div>
        <div className="text-xs text-gray-400 text-end mt-2">{timestamp}</div>
      </div>
      <div className="flex items-end">
        <span className="flex h-8 w-8 justify-center items-center bg-gray-500 text-center rounded-full ml-3">
          {name.charAt(0).toUpperCase()}
        </span>
        {/* <img
          className="w-10 h-10 rounded-full ml-3"
          src={avatar}
          alt={name}
        /> */}
      </div>
    </div>
  );
};

export default SenderCard;

SenderCard.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};
