import activeIcon from "../../assets/images/icons/active.svg";

const Header = () => {
  return (
    <div className="px-2">
      <h1 className="font-semibold text-xl mb-2">My Profile</h1>
      <div className="flex flex-col items-center text-center p-4 border-b border-gray-800">
        <img
          src="http://chatvia-dark.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
          alt="Profile Picture"
          className="rounded-full h-20 w-20 object-cover"
        />
        <h2 className="text-sm font-semibold mt-4">Patricia Smith</h2>
        <p className="flex items-center text-center text-gray-400">
          <img src={activeIcon} alt="Active" className="h-3 w-3 mr-2" />
          Active
        </p>
      </div>
    </div>
  );
};

export default Header;
