import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Error from "../pages/Error";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Profile from "../pages/Profile";
import Chats from "../pages/Chats";
import Groups from "../pages/Groups";
import Contacts from "../pages/Contacts";
import Settings from "../pages/Settings";
import checkAuthLoader from "../utils/Auth";
import { loginAction } from "../utils/Actions";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    loader: checkAuthLoader,
    children: [
      {
        index: true,
        element: <Chats />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "chats",
        element: <Chats />,
      },
      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <Error />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
