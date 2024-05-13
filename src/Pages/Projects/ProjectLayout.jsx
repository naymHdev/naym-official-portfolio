import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({
  name,
  description,
  date,
  demoLink,
  clientCode,
  serverCode,
}) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className=" text-sm md:text-base w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="">
        <h1 className="text-foreground text-xl font-semibold">{name}</h1>
        <p className="text-muted sm:text-foreground text-sm">{date}</p>
        <p className="text-muted sm:inline-block mt-1">{description}</p>
        <div className=" flex-wrap gap-5 flex items-center md:justify-start justify-evenly mt-8">
          {serverCode && (
            <a target={"_blank"} href={serverCode}>
              <button className="flex items-center gap-1 border rounded-xl shadow-md custom-bg px-5 py-3 text-foreground">
                Server Site
                <ArrowUpRight />
              </button>
            </a>
          )}

          {clientCode && (
            <a target={"_blank"} href={clientCode}>
              <button className="flex items-center gap-1 border rounded-xl shadow-md custom-bg px-5 py-3 text-foreground">
                Client Site
                <ArrowUpRight />
              </button>
            </a>
          )}
          {demoLink && (
            <a target={"_blank"} href={demoLink}>
              <button className="border flex items-center gap-1 rounded-xl shadow-md custom-bg px-5 py-3 text-foreground">
                Demo <Eye />
              </button>
            </a>
          )}
        </div>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
