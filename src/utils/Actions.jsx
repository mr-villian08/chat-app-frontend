import { redirect } from "react-router-dom";
import useApis from "../hooks/use-apis";
import toast from "react-hot-toast";

// ? ************************************************************ Sign Up ************************************************************ */
export const signUpAction = async ({ request }) => {
  try {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    const url =
      formData.provider !== "" ? `login/${formData.provider}` : "register";
    const result = await useApis.post(`auth/${url}`, false, formData);
    if (result.status) {
      localStorage.setItem("user", JSON.stringify(result.data.user));
      localStorage.setItem("token", result.data.token);
      toast.success(result.message, {
        className: "dark:bg-gray-800 dark:text-white",
        duration: 2000,
      });
      return redirect("/");
    }

    throw new Error(result.message);
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white",
      duration: 2000,
    });
  }
};

// ? ************************************************************ Login ************************************************************ */
export const loginAction = async ({ request }) => {
  try {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    const result = await useApis.post(
      `auth/login/${formData.provider}`,
      false,
      formData
    );
    if (result.status) {
      localStorage.setItem("user", JSON.stringify(result.data.user));
      localStorage.setItem("token", result.data.token);
      toast.success(result.message, {
        className: "dark:bg-gray-800 dark:text-white",
        duration: 2000,
      });
      return redirect("/");
    }

    throw new Error(result.message);
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white",
      duration: 2000,
    });
  }
};

// ? ************************************************************ Logout ************************************************************ */
export const logoutAction = async () => {
  try {
    const result = await useApis.post("auth/logout", true);

    if (result.status) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success(result.message, {
        className: "dark:bg-gray-800 dark:text-white",
        duration: 2000,
      });
      return redirect("/auth/login");
    }
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white",
      duration: 2000,
    });
  }
};

// ? ************************************************************ Profile ************************************************************ */
export const profileAction = async ({ request }) => {
  try {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    const result = await useApis.update("profile", true, formData);

    if (result.status) {
      return toast.success(result.message, {
        className: "dark:bg-gray-800 dark:text-white",
        duration: 2000,
      });
    }
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white",
      duration: 2000,
    });
  }
};

// ? ************************************************************ Contacts ************************************************************ */
// create
export const addContactAction = async ({ request }) => {
  try {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    const result = await useApis.post("contacts", true, formData);
    if (result.status) {
      toast.success(result.message, {
        className: "dark:bg-gray-800 dark:text-white",
        duration: 2000,
      });
      return result;
    }

    throw new Error(result.message);
  } catch (error) {
    return toast.error(error.message, {
      className: "dark:bg-gray-800 dark:text-white !z-10",
      duration: 100000,
    });
  }
};
