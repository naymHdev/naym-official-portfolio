import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Wizard from "../../Components/Models/Wizard";
import Navigation from "../../Shared/Navigation/Navigation";
import RenderModel from "../Projects/RenderModel";

const Home = () => {
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    // Dynamically import the background image
    import("../../../Public/background/home-background.png").then((image) => {
      setBgUrl(image.default);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Naym Hossen || Home</title>
      </Helmet>
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <div className="bg-black w-full h-full min-h-screen -z-10 opacity-20" />
        {bgUrl && (
          <img
            sizes="100vw"
            src={bgUrl}
            alt="background-image"
            className="-z-50 w-full h-full object-cover object-center fixed"
            loading="lazy"
          />
        )}
        <div className="w-full h-screen absolute">
          <Navigation />
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </main>
    </>
  );
};

export default Home;
