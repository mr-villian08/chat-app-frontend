import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
