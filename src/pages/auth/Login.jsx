import { Link, useSubmit } from "react-router-dom";
import Input from "../../components/ui/Input";
import { useGoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/Schema";

const Login = () => {
  const submit = useSubmit();

  // ? **************************************************************** Use of formik  **************************************************************** */
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        usernameOrEmail: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        submit(values, { method: "POST" });
      },
    });

  // ? ****************************************************************** login with google ****************************************************************** */
  const googleLoginHandler = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const result = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${response.access_token}`,
              Accept: "application/json",
            },
          }
        );

        if (!result.ok) {
          return console.log(result.statusText);
        }

        const userData = await result.json();
        submit({ ...userData, provider: "google" }, { method: "POST" });
      } catch (error) {
        console.log(error.message);
      }
    },
    onError: (error) => console.log(error),
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
                />
                {errors.password && touched.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg !mt-8 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
              >
                LOG IN
              </button>
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

            <div
              id="third-party-auth"
              className="flex items-center justify-center mt-5 flex-wrap"
            >
              <button
                onClick={() => googleLoginHandler()}
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>
              <button
                href="#"
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                  alt="Linkedin"
                />
              </button>
              <button
                href="#"
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px] filter dark:invert"
                  src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                  alt="Github"
                />
              </button>
              <button
                href="#"
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                  alt="Facebook"
                />
              </button>
              <button
                href="#"
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px] dark:gray-100"
                  src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                  alt="twitter"
                />
              </button>

              <button
                href="#"
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                  alt="apple"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
