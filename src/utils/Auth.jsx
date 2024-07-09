import { redirect } from "react-router-dom";

const checkAuthLoader = () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return redirect("/auth/login");
  }

  return token;
};

export default checkAuthLoader;
