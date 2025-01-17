"use client";

import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";

import en from "@/texts/en.json";

import Titles from "../ui/titles";
import Button from "../ui/button";
import NorthEastArrow from "../ui/icons/north-east-arrow-icon";
import ProjectCard from "./project-card";

export type ProjectsProps = typeof en.ProjectPage.projects;

const Projects = () => {
  const [allProjects, setAllProjects] = useState<boolean>(true);
  const t = useTranslations("Projects");
  const projectList = en.ProjectPage.projects;
  const projectListKeys = Object.keys(en.ProjectPage.projects);

  return (
    <div className="content pt-14" id="projects">
      <Titles text={t("title")} position="start" />
      <div className="flex justify-center gap-5 lg:justify-between flex-wrap">
        {projectListKeys.map((project, i) => (
          <Fragment key={i}>
            {(!allProjects ? i < 3 : 1 < projectListKeys.length) &&
            projectList[project as keyof typeof projectList].show ? (
              <ProjectCard
                project={projectList[project as keyof typeof projectList]}
              />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className={`mx-auto lg:ml-0 w-fit`}>
        <Button
          text={t(`button.${!allProjects ? "view" : "hide"}`)}
          image={<NorthEastArrow />}
          func={() => setAllProjects(!allProjects)}
        />
      </div>
    </div>
  );
};

export default Projects;
