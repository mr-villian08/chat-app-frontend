// import PropTypes from "prop-types";
import moreDownIcon from "../../assets/images/icons/more-down.svg";
import shareIcon from "../../assets/images/icons/share.svg";
import blockIcon from "../../assets/images/icons/block.svg";
import editIcon from "../../assets/images/icons/edit.svg";

import { useState } from "react";

const ContactMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={moreDownIcon} alt="User Icon" className="h-5 w-5" />
      </button>
      {isMenuOpen && (
        <div className="border border-gray-800 absolute right-0 z-10 mt-2 w-36 h-3w-32 bg-gray-900 rounded-md shadow-lg">
          <ul className="py-1">
            <li>
              <button
                className=" w-full flex text-center items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Share
                <img src={shareIcon} alt="Share" className="h-4 w-4" />
              </button>
            </li>
            <li>
              <button
                className=" w-full flex text-center items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Block
                <img src={blockIcon} alt="Block" className="h-4 w-4" />
              </button>
            </li>
            <li>
              <div>
                <button className="w-full flex text-center items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <span className="text-sm text-white">Edit</span>
                  <img src={editIcon} alt="Edit" className="h-4 w-4" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

ContactMenu.propTypes = {};

export default ContactMenu;
