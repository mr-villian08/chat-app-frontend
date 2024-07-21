import toast from "react-hot-toast";
import useApis from "../hooks/use-apis";
import { defer } from "react-router-dom";

// ? ********************************************************************* Profile ********************************************************************* */
// get the profile
const profile = async () => {
  try {
    const result = await useApis.get("profile", true);
    if (result.status) {
      return result.data;
    }

    throw new Error(result.message);
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white",
      duration: 2000,
    });
  }
};

// ? ********************************************************************* Contacts ********************************************************************* */
// get all the contacts according to the user login
const contacts = async () => {
  try {
    const result = await useApis.get("contacts", true);
    if (result.status) {
      return result.data;
    }

    throw new Error(result.message);
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white",
      duration: 2000,
    });
  }
};

// ? ********************************************************************* Users ********************************************************************* */
// get the active users according to the user login
const activeUsers = async () => {
  try {
    const result = await useApis.get("users/active", true);
    if (result.status) {
      return result.data;
    }

    throw new Error(result.message);
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white",
      duration: 2000,
    });
  }
};

// ? ********************************************************************* Chats/Recent chats ********************************************************************* */
// get the active users according to the user login
const recentChats = async () => {
  try {
    const result = await useApis.get("chats", true);
    if (result.status) {
      return result.data;
    }

    throw new Error(result.message);
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white",
      duration: 2000,
    });
  }
};

// ? ********************************************************************* Profile Loaders ********************************************************************* */
export const profileLoader = () => {
  return defer({
    profile: profile(),
  });
};

// ? ********************************************************************* Contacts Loaders ********************************************************************* */
export const contactsLoader = () => {
  return defer({
    contacts: contacts(),
  });
};

// ? ********************************************************************* Contacts Loaders ********************************************************************* */
export const chatsLoader = () => {
  return defer({
    activeUsers: activeUsers(),
    recentChats: recentChats(),
  });
};
