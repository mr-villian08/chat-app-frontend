import { Link, useNavigation, useSubmit } from "react-router-dom";
import Input from "../../components/ui/Input";
import { useFormik } from "formik";
import { signUpSchema } from "../../utils/Schema";
import ThirdParty from "../../components/auth/ThirdParty";

const INITIAL_VALUES = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
  provider: "",
};

const SignUp = () => {
  const submit = useSubmit();
  const { state } = useNavigation();

  // ? ***************************************************************************************** Use of formik ***************************************************************************************** */
  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
    useFormik({
      initialValues: INITIAL_VALUES,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        submit(values, { method: "POST" });
      },
    });

  // ? ***************************************************************************************** Render Component ***************************************************************************************** */
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="grid gap-8 w-[550px]">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-6 2xl:p-6 lg:p-6 md:p-6 sm:p-2 m-2">
            <h1 className="pt-4 pb-4 font-bold text-4xl dark:text-gray-400 text-center cursor-default">
              Sign Up
            </h1>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  id="first-name"
                  name="first_name"
                  placeholder="First Name"
                  autoComplete="off"
                  value={values.first_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isError={errors.first_name && touched.first_name}
                  errors={errors}
                />
                <Input
                  id="last-name"
                  name="last_name"
                  placeholder="Last Name"
                  autoComplete="off"
                  value={values.last_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  id="username"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isError={errors.username && touched.username}
                  errors={errors}
                />
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isError={errors.email && touched.email}
                  errors={errors}
                />
              </div>
              <div>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="off"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isError={errors.phone && touched.phone}
                  errors={errors}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isError={errors.password && touched.password}
                  errors={errors}
                />
                <Input
                  id="confirm-password"
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  value={values.confirm_password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isError={errors.confirm_password && touched.confirm_password}
                  errors={errors}
                />
              </div>
              <div className="relative">
                <button
                  className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 shadow-lg !mt-8 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out relative disabled:opacity-85 disabled:cursor-auto disabled:pointer-events-none disabled:text-white disabled:font-bold"
                  type="submit"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="animate-spin inline-block w-5 h-5 border-4 border-current border-t-transparent text-gray-900 rounded-full"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                  SIGN UP
                </button>
              </div>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">
                  Already Have an account?
                </span>
                <Link
                  to="/auth/login"
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                >
                  <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Log in
                  </span>
                </Link>
              </h3>
            </div>
            <ThirdParty />
            <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
              <p className="cursor-default">
                By signing in, you agree to our{" "}
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="#"
                >
                  <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Terms{" "}
                  </span>
                </a>
                and{" "}
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="#"
                >
                  <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Privacy Policy
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
