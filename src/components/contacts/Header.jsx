import { useRef } from "react";
import addUserIcon from "../../assets/images/icons/add-user.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import Modal from "../Modal";
import CreateContact from "./CreateContact";

const Header = () => {
  const dialog = useRef(null);

  const showCreateModal = () => {
    dialog.current.open();
  };

  return (
    <>
      <Modal title="Add Contacts" Component={CreateContact} ref={dialog} />
      <div className="px-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl mb-2">Contacts</h1>
          <button
            className="group flex justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-1 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] hover:bg-gradient-to-r from-gray-800 to-black"
            type="button"
            onClick={showCreateModal}
          >
            <img src={addUserIcon} alt="User Icon" className="h-5 w-5" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:dark:text-white group-hover:text-[12px] group-hover:text-black group-hover:-translate-y-10 duration-700">
              Add User
            </span>
          </button>
        </div>
        <div className="mt-6 mb-8">
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
    </>
  );
};

export default Header;
