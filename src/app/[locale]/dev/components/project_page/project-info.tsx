"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";

import Link from "next/link";
import Image from "next/image";

import en from "@/texts/en.json";
import SkillsItem from "../ui/skills-item";
import Button from "../ui/button";
import NorthEastArrow from "../ui/icons/north-east-arrow-icon";
import Github2Icon from "../ui/icons/github-2-icon";

const ProjectInfo = () => {
  const pathname = usePathname().slice(1).replace("dev/projects/", "");

  const t = useTranslations("ProjectPage");
  const tech_project =
    en.ProjectPage.projects[pathname as keyof typeof en.ProjectPage.projects]
      .technologies;
  const tech_project_array = Object.keys(tech_project);

  return (
    <>
      <div className="relative w-full pt-[57%] border rounded-xl overflow-hidden shadow-xl">
        <Image
          src={t(`projects.${pathname}.image.img`)}
          alt={t(`projects.${pathname}.title`)}
          fill
          sizes="100%"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-24 md:mx-14 mt-20">
        <h4 className="text-3xl font-medium shrink-0">{t("about.title")}</h4>
        <div>
          <p className="text-sm font-normal leading-7 whitespace-pre-wrap">
            {t(`projects.${pathname}.description`)}
          </p>
          {t(`projects.${pathname}.role`) && (
            <>
              <h6 className="mt-9 mb-3 text-xl font-semibold">
                {t("about.role")}
              </h6>
              <p className="text-sm font-normal leading-7 whitespace-pre-wrap">
                {t(`projects.${pathname}.role`)}
              </p>
            </>
          )}
          <h6 className="mt-9 mb-4 text-xl font-semibold">
            {t("about.technologies")}
          </h6>
          <div className="grid grid-cols-2 md:grid-cols-3 space-y-2 text-lightGray mt-2 mb-20">
            {tech_project_array.map((item, i) => (
              <Fragment key={i}>
                {tech_project[item as keyof typeof tech_project] ? (
                  <SkillsItem item={item} text={item} />
                ) : null}
              </Fragment>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center md:justify-start">
            <Link href={t(`projects.${pathname}.projectURL`)} target="_blank">
              <Button text={t("about.buttons.1")} image={<NorthEastArrow />} />
            </Link>
            <Link href={t(`projects.${pathname}.githubURL`)} target="_blank">
              <Button
                text={t("about.buttons.2")}
                image={<Github2Icon />}
                dark
                reversed
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
