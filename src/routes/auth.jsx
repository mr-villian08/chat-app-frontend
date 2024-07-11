import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Error from "../pages/Error";
import { loginAction } from "../utils/Actions";

const auth = [
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
];

export default auth;
