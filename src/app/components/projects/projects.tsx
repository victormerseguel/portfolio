import Titles from "../ui/titles";
import { useTranslations } from "next-intl";
import Button from "../ui/button";
import NorthEastArrow from "../ui/icons/north-east-arrow-icon";
import ProjectCard from "./project-card";
import en from "@/texts/en.json";

export type ProjectsProps = typeof en.ProjectPage.projects;

const Projects = () => {
  const t = useTranslations("Projects");
  const projectList = en.ProjectPage.projects;
  const projectListKeys = Object.keys(en.ProjectPage.projects);

  return (
    <div className="content pt-14" id="projects">
      <Titles text={t("title")} position="start" />
      <div className="flex justify-center gap-5 lg:justify-between flex-wrap">
        {projectListKeys.map((project, i) => (
          <>
            {projectList[project as keyof typeof projectList].show ? (
              <ProjectCard
                project={projectList[project as keyof typeof projectList]}
              />
            ) : null}
          </>
        ))}
      </div>
      <div className="mx-auto lg:ml-0 w-fit">
        <Button text={t("button")} image={<NorthEastArrow />} />
      </div>
    </div>
  );
};

export default Projects;
