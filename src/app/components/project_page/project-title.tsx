"use client";

import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const ProjectTitle = () => {
  const pathname = usePathname().slice(1).replace("projects/", "");
  const t = useTranslations("ProjectPage");

  return (
    <h3 className="text-3xl font-bold pt-20 mb-10 text-center md:text-start">
      {t(`projects.${pathname}.title`)}
    </h3>
  );
};

export default ProjectTitle;
