import PropTypes from "prop-types";

const ReceiverCard = ({ name, avatar, message, timestamp, isLastMessage }) => {
  return (
    <div
      className={"flex justify-start mb-4"}
      id={`${isLastMessage ? "here-id" : undefined}`}
    >
      <div className="flex items-end">
        {avatar === null && (
          <span className="flex h-8 w-8 justify-center items-center bg-gray-500 text-center rounded-full mr-3">
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
      <div className="max-w-xs bg-green-700 p-3 rounded-lg">
        <div>
          <span>{message}</span>
          <span className="flex-row float-right mt-2 ml-2 text-[10px] text-gray-950 text-end items-end">
            {timestamp}
          </span>
        </div>
      </div>
      {/* <div className="max-w-xs bg-green-700 p-2 rounded-lg">
        <div>{message}</div>
        <div className="text-xs text-gray-300 mt-2">{timestamp}</div>
      </div> */}
    </div>
  );
};

export default ReceiverCard;

ReceiverCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isLastMessage: PropTypes.bool.isRequired,
};
