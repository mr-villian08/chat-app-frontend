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
