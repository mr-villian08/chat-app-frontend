import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useSubmit } from "react-router-dom";

const ThirdParty = () => {
  const submit = useSubmit();

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
          throw new Error(result.statusText);
        }

        const userData = await result.json();
        submit({ ...userData, provider: "google" }, { method: "POST" });
      } catch (error) {
        toast.error(error.message);
      }
    },
    onError: (error) => toast.error(error.message),
  });

  return (
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
  );
};

export default ThirdParty;
