import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HatModel from "../../Components/Models/HatModel";
import RenderModel from "../Projects/RenderModel";
import AboutDetails from "./AboutDetails";
import HomeBtn from "../../Components/HomeBtn";

export default function About() {
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    // Dynamically import the background image
    import("../../../Public/background/about-background.png").then((image) => {
      setBgUrl(image.default);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Naym Hossen || About</title>
      </Helmet>
      <HomeBtn />
      {bgUrl && (
        <img
          src={bgUrl}
          sizes="100vw"
          alt="Next.js Portfolio website's about page background image"
          className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
      )}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center mt-24">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Naym Hossen
          </h1>
          <p className="font-light md:font-medium text-foreground text-lg">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
