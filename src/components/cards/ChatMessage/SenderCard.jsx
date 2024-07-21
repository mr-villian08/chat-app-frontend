import PropTypes from "prop-types";

const SenderCard = ({ name, avatar, message, timestamp, isLastMessage }) => {
  return (
    <div
      className="flex justify-end w-full mb-4"
      id={`${isLastMessage ? "here-id" : undefined}`}
    >
      <div className="max-w-xs bg-gray-700 p-3 rounded-lg">
        <div>{message}</div>
        <div className="text-xs text-gray-400 text-end mt-2">{timestamp}</div>
      </div>
      <div className="flex items-end">
        {avatar === null && (
          <span className="flex h-8 w-8 justify-center items-center bg-gray-500 text-center rounded-full ml-3">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
        {avatar !== null && (
          <img
            className="w-8 h-8 object-cover rounded-full mr-3"
            src={avatar}
            alt={name}
          />
        )}
      </div>
    </div>
  );
};

export default SenderCard;

SenderCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isLastMessage: PropTypes.bool.isRequired,
};
