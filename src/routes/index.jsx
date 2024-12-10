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
import {
  addContactAction,
  loginAction,
  logoutAction,
  profileAction,
  signUpAction,
} from "../utils/Actions";
import { chatsLoader, contactsLoader, profileLoader } from "../utils/Loaders";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <Error />,
      element: <RootLayout />,
      loader: checkAuthLoader,
      children: [
        {
          index: true,
          element: <Chats />,
          loader: chatsLoader,
        },
        {
          path: "profile",
          element: <Profile />,
          loader: profileLoader,
          action: profileAction,
        },
        {
          path: "chats",
          element: <Chats />,
          loader: chatsLoader,
        },
        {
          path: "groups",
          element: <Groups />,
        },
        {
          path: "contacts",
          element: <Contacts />,
          loader: contactsLoader,
          action: addContactAction,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "logout",
          action: logoutAction,
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
          action: signUpAction,
        },
      ],
    },
  ],
  { basename: "/chat-app-frontend" }
);

export default routes;
