import Footer from "@/app/components/footer/footer";

import ProjectNav from "@/app/components/project_page/project-nav";
import en from "@/texts/en.json";
import { useTranslations } from "next-intl";
import ProjectTitle from "@/app/components/project_page/project-title";
import ProjectInfo from "@/app/components/project_page/project-info";
import ProjectClose from "@/app/components/project_page/project-close";

const ProjectPage = ({ back }: { back?: boolean }) => {
  const a = useTranslations("About");
  const t = useTranslations("ProjectPage");
  const tech_list = Object.keys(en.About.skills_items);
  const tech_project = Object.keys(
    en.ProjectPage.projects.project_1.technologies
  );

  return (
    <div className="bg-background2">
      <ProjectClose back={back} />
      <div className="bg-background h-52 mt-[50px] rounded-t-xl">
        <div className="mx-3 md:content mb-28">
          <ProjectTitle />
          <ProjectNav />
          <div
            className="flex flex-col items-center my-12 pt-12 pb-24 px-3 md:px-10 bg-no-repeat bg-cover rounded-2xl"
            style={{ backgroundImage: "url(/bg-grain.jpg)" }}
          >
            <ProjectInfo />
          </div>
        </div>
        <Footer background />
      </div>
    </div>
  );
};

export default ProjectPage;
