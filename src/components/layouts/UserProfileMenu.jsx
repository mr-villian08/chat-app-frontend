import PropTypes from "prop-types";
import { useState } from "react";
import userIcon from "../../assets/images/icons/user-line.svg";
import profileIcon from "../../assets/images/icons/profile.svg";
import settingsIcon from "../../assets/images/icons/settings.svg";
import logoutIcon from "../../assets/images/icons/logout.svg";
import { Form, Link } from "react-router-dom";

const UserProfileMenu = ({ classes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className={
          isMenuOpen
            ? `${classes} bg-gradient-to-t from-gray-800 to-black`
            : classes
        }
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={userIcon} alt="User Icon" height="40px" width="40px" />
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:dark:text-white group-hover:text-sm group-hover:text-black group-hover:-translate-y-10 duration-700">
          User
        </span>
      </button>
      {isMenuOpen && (
        <div className="border border-gray-800 absolute bottom-10 z-10 mt-2 w-36 h-36 bg-gray-900 rounded-md shadow-lg">
          <ul className="py-1">
            <li>
              <Link
                to="/profile"
                className="flex text-center items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Profile
                <img src={profileIcon} alt="profile" className="h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex text-center items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Setting
                <img src={settingsIcon} alt="Settings" className="h-4 w-4" />
              </Link>
            </li>
            <hr className="mt-4 mb-2 border-gray-800" />
            <li>
              <Form method="POST" action="/logout">
                <div>
                  <button className="w-full flex text-center items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    <span className="text-sm text-white">Log out</span>
                    <img src={logoutIcon} alt="Logout" className="h-4 w-4" />
                  </button>
                </div>
              </Form>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;

UserProfileMenu.propTypes = {
  classes: PropTypes.string.isRequired,
};
