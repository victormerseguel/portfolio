import Footer from "@/app/components/footer/footer";
import CloseButton from "@/app/components/ui/icons/close-button";

import ProjectNav from "@/app/components/project_page/project-nav";
import Image from "next/image";
import en from "@/texts/en.json";
import { useTranslations } from "next-intl";
import SkillsItem from "@/app/components/ui/skills-item";
import Button from "@/app/components/ui/button";
import NorthEastArrow from "@/app/components/ui/icons/north-east-arrow-icon";
import Github2Icon from "@/app/components/ui/icons/github-2-icon";
import ProjectTitle from "@/app/components/project_page/project-title";
import ProjectInfo from "@/app/components/project_page/project-info";

const Page = () => {
  const a = useTranslations("About");
  const t = useTranslations("Project-page");
  const tech_list = Object.keys(en.About.skills_items);
  const tech_project = Object.keys(
    en["Project-page"].projects.project_1.technologies
  );

  return (
    <div className="bg-background2">
      <div className="flex justify-end fixed top-0 w-full z-40 bg-background2 cursor-zoom-out">
        <CloseButton />
      </div>
      <div className="bg-background h-52 mt-[50px] rounded-t-xl">
        <div className="content mb-28">
          <ProjectTitle />
          <ProjectNav />
          <div
            className="flex flex-col items-center mt-12 pt-12 pb-24 px-10 bg-no-repeat bg-cover rounded-2xl"
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

export default Page;
