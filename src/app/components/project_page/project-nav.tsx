import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconLink from "./icon-link";
import Button from "../ui/button";
import en from "@/texts/en.json";

const ProjectNav = () => {
  const t = useTranslations("ProjectPage");
  const links = Object.keys(en.Header.contacts);

  return (
    <nav className="flex justify-between items-center sticky top-12 bg-background py-2 z-30">
      <div className="flex gap-2.5 items-center">
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
      <div className="flex gap-5">
        {links.map((link, i) => (
          <Link href={"/"} key={i} className="hover:opacity-70">
            <IconLink icon={link} />
          </Link>
        ))}
        <Button text={t("nav.button")} dark />
      </div>
    </nav>
  );
};

export default ProjectNav;
