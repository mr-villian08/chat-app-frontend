import { Link, NavLink } from "react-router-dom";
import icons from "../../store/icons";
import userIcon from "../../assets/images/icons/user-line.svg";
import sun from "../../assets/images/icons/sun.svg";
const commonClasses =
  "group flex justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] hover:bg-gradient-to-r from-gray-800 to-black";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen dark:bg-gray-800 p-4">
      <div>
        <div className="h-8 w-8 pt-2">
          <Link to="/">
            <img
              src="http://chatvia-dark.react.themesbrand.com/static/media/logo.e41f6087382055646c1c02d0a63583d5.svg"
              alt="Logo"
              className="align-middle"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
      </div>
      <div>
        <div className="">
          <ul className="flex flex-col justify-center items-center gap-10">
            {icons.map((icon, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={icon.link}
                  className={({ isActive }) =>
                    isActive
                      ? `${commonClasses} bg-gradient-to-t from-gray-800 to-black`
                      : commonClasses
                  }
                >
                  <img
                    src={icon.svg}
                    alt={icon.name}
                    height="40px"
                    width="40px"
                    // className="xxl:h-[20px] xxl:w-[20px]"
                  />
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:dark:text-white group-hover:text-sm group-hover:text-black group-hover:-translate-y-10 duration-700">
                    {icon.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="flex flex-col justify-center items-center gap-10">
        <li className="nav-item">
          <button className={commonClasses}>
            <img src={sun} alt="Theme switch" className="h-[24px]" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:dark:text-white group-hover:text-sm group-hover:text-black group-hover:-translate-y-10 duration-700">
              Light
            </span>
          </button>
        </li>
        <li className="nav-item">
          <img
            src={userIcon}
            alt="User Icon"
            height="30px"
            width="30px"
            className="border rounded-full object-cover text-gray-500"
          />
        </li>
        {/* <li className="nav-item">hello</li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
