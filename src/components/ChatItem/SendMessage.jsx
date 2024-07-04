import EmojiPicker from "emoji-picker-react";
import PropTypes from "prop-types";
import emojiIcon from "../../assets/images/icons/emoji.svg";
import attachmentIcon from "../../assets/images/icons/attachment.svg";
import imagesIcon from "../../assets/images/icons/image.svg";
import sendIcon from "../../assets/images/icons/send.svg";

const SendMessage = ({
  sendMessageHandler,
  onChangeMessageHandler,
  message,
  isPickerVisible,
  setIsPickerVisible,
  onEmojiClick,
}) => {
  return (
    <div className="border-t-2 border-gray-700 p-6">
      <form onSubmit={sendMessageHandler}>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Enter Message..."
            value={message}
            className="pl-4 p-2 2xl:w-[1220px] xl:w-[730px] md:w-[560px] bg-gray-800 rounded-lg outline-none"
            onChange={onChangeMessageHandler}
          />
          <div className="flex relative items-center text-center gap-6">
            <div className="relative group cursor-pointer hover:translate-y-1 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] hover:bg-gradient-to-r from-gray-800 to-black">
              <img
                src={emojiIcon}
                alt="Emoji"
                className="h-5 w-5 cursor-pointer"
                onClick={() => setIsPickerVisible(!isPickerVisible)}
              />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:dark:text-white group-hover:text-sm group-hover:text-black group-hover:-translate-y-12 -left-3 duration-700">
                Emoji
              </span>
            </div>
            <div
              className={`absolute bottom-12 right-44 transition-transform duration-300 ${
                isPickerVisible ? "scale-100" : "scale-0"
              }`}
            >
              {isPickerVisible && (
                <EmojiPicker
                  onEmojiClick={onEmojiClick}
                  theme="dark"
                  height={400}
                  width={300}
                />
              )}
            </div>
            <label
              htmlFor="attachment-input"
              className="relative group cursor-pointer hover:translate-y-1 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] hover:bg-gradient-to-r from-gray-800 to-black"
            >
              <img src={attachmentIcon} alt="Attachment" className="h-5 w-5" />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:dark:text-white group-hover:text-sm group-hover:text-black group-hover:-translate-y-14 -left-7 duration-700">
                Attachment
              </span>
              <input
                id="attachment-input"
                type="file"
                className="hidden"
                // onChange={(e) => handleAttachmentUpload(e.target.files)}
              />
            </label>
            <label
              htmlFor="image-input"
              className="relative group cursor-pointer hover:translate-y-1 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] hover:bg-gradient-to-r from-gray-800 to-black"
            >
              <img
                src={imagesIcon}
                alt="Images"
                className="h-5 w-5 cursor-pointer"
              />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:dark:text-white group-hover:text-sm group-hover:text-black group-hover:-translate-y-14 -left-4 duration-700">
                Images
              </span>
              <input
                id="image-input"
                type="file"
                accept="image/*"
                className="hidden"
                // onChange={(e) => handleImageUpload(e.target.files)}
              />
            </label>
            <button className="flex items-center bg-teal-500 gap-1 px-3 py-1.5 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-teal-600 duration-300 hover:gap-2 hover:translate-x-3">
              <img src={sendIcon} alt="Send" />
            </button>
          </div>
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
  isPickerVisible: PropTypes.bool,
  setIsPickerVisible: PropTypes.func.isRequired,
  onEmojiClick: PropTypes.func.isRequired,
  // chosenEmoji: PropTypes.object,
};
