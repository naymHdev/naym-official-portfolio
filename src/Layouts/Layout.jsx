import { Outlet } from "react-router-dom";
import Sound from "../Components/Sound";
import FireFliesBackground from "../Components/FireFliesBackground";

const Layout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <FireFliesBackground />
      <Sound />
      <div id="my-modal" />
    </>
  );
};

export default Layout;
