import Titles from "../ui/titles";
import { useTranslations } from "next-intl";
import Button from "../ui/button";
import NorthEastArrow from "../ui/icons/north-east-arrow-icon";
import ProjectCard from "./project-card";

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <div className="content pt-14" id="projects">
      <Titles text={t("title")} position="start" />
      <div className="flex justify-center gap-5 lg:justify-between flex-wrap">
        <ProjectCard src="/project-imc.jpg" alt="teste" />
        <ProjectCard src="/project-imc.jpg" alt="teste" />
        <ProjectCard src="/project-imc.jpg" alt="teste" />
      </div>
      <div className="mx-auto lg:ml-0 w-fit">
        <Button text={t("button")} image={<NorthEastArrow />} />
      </div>
    </div>
  );
};

export default Projects;
