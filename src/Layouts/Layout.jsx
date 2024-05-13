import { Outlet } from "react-router-dom";
import Sound from "../Components/Sound";
import FireFliesBackground from "../Components/FireFliesBackground";
import Navigation from "../Shared/Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <FireFliesBackground />
      <Sound />
      <div id="my-modal" />
    </>
  );
};

export default Layout;
