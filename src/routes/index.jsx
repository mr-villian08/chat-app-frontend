import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Profile from "../pages/Profile";
import Chats from "../pages/Chats";
import Groups from "../pages/Groups";
import Contacts from "../pages/Contacts";
import Settings from "../pages/Settings";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
