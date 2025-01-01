import Titles from "../ui/titles";
import { useTranslations } from "next-intl";
import Button from "../ui/buttom";
import NorthEastArrow from "../ui/icons/north-east-arrow-icon";
import ProjectCard from "./project-card";

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <div className="content pt-14" id="projects">
      <Titles text={t("title")} />
      <div className="flex justify-between">
        <ProjectCard src="/project-imc.jpg" alt="teste" />
        <ProjectCard src="/project-imc.jpg" alt="teste" />
        <ProjectCard src="/project-imc.jpg" alt="teste" />
      </div>
      <Button text={t("button")} image={<NorthEastArrow />} />
    </div>
  );
};

export default Projects;
