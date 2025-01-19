import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconLink from "./icon-link";
import Button from "../ui/button";
import en from "@/texts/en.json";
import ProjectNavButton from "./project-nav-button";

const ProjectNav = () => {
  const t = useTranslations("ProjectPage");
  const t2 = useTranslations("Header");
  const links = Object.keys(en.Header.contacts);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center md:sticky top-12 bg-background py-2 z-30">
      <div className="flex gap-2.5 items-center mb-4 md:mb-0">
        <Image
          src={"/victor-photo-1.png"}
          alt="Victor Merseguel"
          width={50}
          height={50}
        />
        <div>
          <p className="uppercase font-medium text-sm">{t("nav.name")}</p>
          <p className="uppercase font-light text-[11px]">{t("nav.job")}</p>
        </div>
      </div>
      <div className="hidden md:flex gap-5">
        {links.map((link, i) => (
          <Link
            href={t2(`contacts_links.${link}`)}
            key={i}
            className="hover:opacity-70"
            target="_blank"
          >
            <IconLink icon={link} />
          </Link>
        ))}
        <div className="">
          <ProjectNavButton text={t("nav.button")} />
        </div>
      </div>
      <div className="md:hidden mt-0">
        <ProjectNavButton text={t("nav.button")} />
      </div>
    </nav>
  );
};

export default ProjectNav;
