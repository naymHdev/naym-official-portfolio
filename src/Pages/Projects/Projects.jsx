import bg from "../../../Public/background/projects-background.png";
import { projectsData } from "../../Components/Api/Data";
import Design from "../../Components/Models/Design";
import ProjectList from "./ProjectList";
import RenderModel from "./RenderModel";

export default function Projects() {
  return (
    <>
      <img
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center"
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Design />
        </RenderModel>
      </div>
    </>
  );
}
