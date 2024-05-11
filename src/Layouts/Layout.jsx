import { Outlet } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
