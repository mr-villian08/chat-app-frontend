import PropTypes from "prop-types";

const SendMessage = ({
  sendMessageHandler,
  onChangeMessageHandler,
  message,
}) => {
  return (
    <div className="border-t-2 border-gray-700 justify-between p-6">
      <form onSubmit={sendMessageHandler}>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Message..."
            value={message}
            className="pl-4 p-2 w-[550px] bg-gray-800 rounded-lg outline-none"
            onChange={onChangeMessageHandler}
          />
          {/* <button className="bg-purple-600 p-3 rounded-r-lg" type="submit">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-9.568-4.303 4.303 9.568 9.568-4.303a1.5 1.5 0 00-.303-2.963l-4.303-.999a1.5 1.5 0 00-1.414.414z"
              />
            </svg>
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SendMessage;

SendMessage.propTypes = {
  sendMessageHandler: PropTypes.func.isRequired,
  onChangeMessageHandler: PropTypes.func.isRequired,
  message: PropTypes.string,
};
