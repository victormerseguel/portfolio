"use client";

import Image from "next/image";
import en from "@/texts/en.json";
import { useTranslations } from "next-intl";
import SkillsItem from "../ui/skills-item";
import Button from "../ui/button";
import NorthEastArrow from "../ui/icons/north-east-arrow-icon";
import Github2Icon from "../ui/icons/github-2-icon";
import { Fragment } from "react";
import { usePathname } from "@/i18n/routing";
import Link from "next/link";

const ProjectInfo = () => {
  const pathname = usePathname().slice(1);

  const a = useTranslations("About");
  const t = useTranslations("ProjectPage");
  const tech_list = Object.keys(en.About.skills_items);
  const tech_project = Object.keys(
    en.ProjectPage.projects[pathname as keyof typeof en.ProjectPage.projects]
      .technologies
  );

  return (
    <>
      <div className="relative w-full pt-[51.6%]">
        <Image
          src={t(`projects.${pathname}.image.img`)}
          alt={t(`projects.${pathname}.title`)}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex gap-24 mx-14 mt-20">
        <h4 className="text-3xl font-medium shrink-0">{t("about.title")}</h4>
        <div>
          <p className="text-sm font-normal leading-7">
            {t(`projects.${pathname}.description`)}
          </p>
          <h6 className="mt-9 mb-3 text-xl font-semibold">{t("about.role")}</h6>
          <p className="text-sm font-normal leading-7">
            {t(`projects.${pathname}.role`)}
          </p>
          <h6 className="mt-9 mb-4 text-xl font-semibold">
            {t("about.technologies")}
          </h6>
          <div className="grid grid-cols-3 space-y-2 text-lightGray mt-2 mb-20">
            {tech_project.map((item, i) => (
              <Fragment key={i}>
                {item
                  ? tech_list.map((skill, i) =>
                      item === skill ? (
                        <SkillsItem
                          item={a(`skills_items.${skill}.icon`)}
                          text={a(`skills_items.${skill}.text`)}
                          key={i}
                        />
                      ) : null
                    )
                  : null}
              </Fragment>
            ))}
          </div>
          <div className="flex gap-6 justify-start">
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
