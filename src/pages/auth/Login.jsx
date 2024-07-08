import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import { useGoogleLogin } from "@react-oauth/google";
// import useApis from "../../hooks/use-apis";
import axios from "axios";

const Login = () => {
  // ? ****************************************************************** login with google ****************************************************************** */
  const googleLoginHandler = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        console.log(response);
        const result = await axios.get(
          "http://127.0.0.1:8000/api/auth/login/google",
          {
            token: response.access_token,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "x-api-key": import.meta.env.VITE_APP_AUTH_API_KEY,
            },
          }
        );
        console.log(result);
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
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
              Log In
            </h1>
            <form action="#" method="post" className="space-y-4">
              <div>
                <Input
                  id="username-email"
                  name="usernameOrEmail"
                  placeholder="Username/Email"
                  isRequired
                  autoComplete="off"
                />
              </div>
              <div>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  isRequired
                  autoComplete="off"
                />
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
