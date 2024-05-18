import { useEffect, useState } from "react";
import { projectsData } from "../../Components/Api/Data";
import Design from "../../Components/Models/Design";
import ProjectList from "./ProjectList";
import RenderModel from "./RenderModel";
import HomeBtn from "../../Components/HomeBtn";
import { Helmet } from "react-helmet";

export default function Projects() {
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    import("../../../Public/background/projects-background.png").then(
      (image) => {
        setBgUrl(image.default);
      }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Naym Hossen || Projects</title>
      </Helmet>
      <HomeBtn />
      {bgUrl && (
        <img
          src={bgUrl}
          alt="Next.js Portfolio website's about page background image"
          className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
      )}
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Design />
        </RenderModel>
      </div>
    </>
  );
}
