import { redirect } from "react-router-dom";

export const authenticate = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw redirect("/auth/login");
  }
  return token;
};

// Root authentication loader
const checkAuthLoader = () => {
  authenticate(); // Reuse the centralized logic
  return null; // Proceed without redirection
};

export default checkAuthLoader;
