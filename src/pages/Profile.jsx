import { Await, useLoaderData } from "react-router-dom";
import Header from "../components/profile/Header";
import Info from "../components/profile/Info";
import { Suspense } from "react";

const Profile = () => {
  const { profile } = useLoaderData();

  return (
    <div className="p-7">
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={profile}>
          {(loadedProfile) => (
            <>
              <Header profile={loadedProfile} />
              <Info profile={loadedProfile} />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default Profile;
