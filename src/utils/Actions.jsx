import { redirect } from "react-router-dom";
import useApis from "../hooks/use-apis";

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
      localStorage.setItem("user", result.user);
      localStorage.setItem("token", result.token);
      return redirect("/");
    }

    throw new Error(result.message);
  } catch (error) {
    return console.log(error.message);
  }
};
