import searchIcon from "../../assets/images/icons/search.svg";

const Header = () => {
  return (
    <div className="px-2">
      <h1 className="font-semibold text-xl mb-2">Chats</h1>
      <div className="mt-6">
        <form className="w-full">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={searchIcon} alt="Search" height={20} width={20} />
            </div>
            <input
              required=""
              placeholder="Search"
              className="block w-full p-2 ps-10 text-lg text-gray-900 border border-gray-900 rounded-sm bg-gray-50 outline-none dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white"
              id="default-search"
              type="search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
