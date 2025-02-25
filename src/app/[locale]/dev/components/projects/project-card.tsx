import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import NorthEastArrow from "../ui/icons/north-east-arrow-icon";
import { Link } from "@/i18n/routing";

// prettier-ignore
const ProjectCard = ({ project }: { project: any }) => { // eslint-disable-line @typescript-eslint/no-explicit-any
  const t = useTranslations("Projects");
  const p = useTranslations("ProjectPage");

  return (
    <div className="my-12 hover:opacity-90 ">
      <Link href={`/dev/projects/${project.id}`}>
        <div className="w-[270px] h-[346px] relative rounded-md border overflow-hidden shadow-xl">
          <Image
            src={project.image.thumb}
            alt={project.title}
            className="border-none object-cover"
            fill
            sizes="270px"
          />
        </div>
        <h4 className="font-semibold uppercase text-lg truncate max-w-[270px] tracking-tighter mt-3">
          {p(`projects.${project.id}.title`)}
        </h4>
        <p className="mt-[-3px] mb-2 tracking-normal text-xs truncate max-w-[270px]">
          {p(`projects.${project.id}.description`)}
        </p>
        <div className="flex items-center gap-0.5">
          <p className="tracking-tighter uppercase text-[10px]">
            {t("project-link")}
          </p>
          <NorthEastArrow small />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
