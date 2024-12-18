import PropTypes from "prop-types";
import searchIcon from "../../assets/images/icons/search.svg";
import phoneIcon from "../../assets/images/icons/phone.svg";
import videoIcon from "../../assets/images/icons/video.svg";
import moreIcon from "../../assets/images/icons/more.svg";

const TopBar = ({ image, name, status }) => {
  return (
    <div className="flex items-center border-b-2 border-gray-700 justify-between p-5">
      <div className="flex items-center">
        {image !== null && (
          <img
            className="h-8 w-8 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        )}
        {image === null && (
          <span className="flex items-center justify-center h-8 w-8 bg-gray-500 text-center rounded-full">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
        <div className="flex items-center text-center ml-3">
          <p className="text-sm font-medium">{name}</p>
          {status === "ONLINE" && (
            <span className="text-lg text-green-400 ml-2 border-black">●</span>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <img src={searchIcon} alt="Search" className="cursor-pointer h-5 w-5" />
        <img src={phoneIcon} alt="Phone" className="cursor-pointer h-5 w-5" />
        <img src={videoIcon} alt="Video" className="cursor-pointer h-5 w-5" />
        <img src={moreIcon} alt="More" className="cursor-pointer h-5 w-5" />
      </div>
    </div>
  );
};

export default TopBar;

TopBar.propTypes = {
  image: PropTypes.string || null,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
