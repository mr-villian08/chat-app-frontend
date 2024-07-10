import { Link, useNavigate, useNavigation, useSubmit } from "react-router-dom";
import Input from "../../components/ui/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/Schema";
import ThirdParty from "../../components/auth/ThirdParty";
import { useEffect } from "react";

const Login = () => {
  const submit = useSubmit();
  const { state } = useNavigation();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  // ? **************************************************************** Use of formik  **************************************************************** */
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        usernameOrEmail: "",
        password: "",
        provider: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        submit(values, { method: "POST" });
      },
    });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
              Log In
            </h1>
            <form method="post" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input
                  id="username-email"
                  name="usernameOrEmail"
                  value={values.usernameOrEmail}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Username/Email"
                  autoComplete="off"
                  isError={errors.password && touched.password}
                />
                {errors.usernameOrEmail && touched.usernameOrEmail && (
                  <p className="text-red-500">{errors.usernameOrEmail}</p>
                )}
              </div>
              <div>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password"
                  autoComplete="off"
                  isError={errors.password && touched.password}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
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
                  LOG IN
                </button>
              </div>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">
                  Not Have an account?
                </span>
                <Link
                  to="/auth/sign-up"
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                >
                  <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sign Up
                  </span>
                </Link>
              </h3>
            </div>
            <ThirdParty />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
