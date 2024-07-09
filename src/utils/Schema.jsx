import * as Yup from "yup";

// ? ************************************************************************ Login Schema ************************************************************************ */
export const loginSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Username or email is required"),
  password: Yup.string().required("Password is required"),
});
