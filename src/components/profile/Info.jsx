import { Suspense } from "react";
import InfoInput from "./InfoInput";
import { Await, useLoaderData } from "react-router-dom";

const Info = () => {
  const { profile } = useLoaderData();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={profile}>
        {(loadedProfile) => (
          <>
            <InfoInput
              title="Username"
              inputName="username"
              data={loadedProfile}
            />
            <InfoInput
              title="Your Name"
              inputName="name"
              data={loadedProfile}
            />
            <InfoInput
              title="About"
              inputName="about"
              data={loadedProfile}
              isTextArea
            />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default Info;
