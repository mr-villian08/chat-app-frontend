import { redirect } from "react-router-dom";
import useApis from "../hooks/use-apis";
import toast from "react-hot-toast";

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
