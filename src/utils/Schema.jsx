import * as Yup from "yup";

// ? ************************************************************************ Login Schema ************************************************************************ */
export const loginSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Username or email is required"),
  password: Yup.string().required("Password is required"),
});

// ? ************************************************************************ Login Schema ************************************************************************ */
export const signUpSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address!"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().required("Confirm Password is required"),
});

// ? ************************************************************************ Login Schema ************************************************************************ */
export const addContactSchema = Yup.object().shape({
  emailPhoneUsername: Yup.string().required(
    "Email, Phone or Username is required"
  ),
});
