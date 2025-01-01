import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NorthEastArrow from "../ui/icons/north-east-arrow-icon";

type ProjectCardProps = {
  src: string;
  alt: string;
};

const ProjectCard = ({ src, alt }: ProjectCardProps) => {
  const t = useTranslations("Projects");
  return (
    <div className="my-12 hover:opacity-90">
      <Link href={"/"}>
        <div className="w-[270px] h-[346px] relative">
          <Image
            src={src}
            alt={alt}
            className="rounded-[5px] border-none object-cover"
            fill
          />
        </div>
        <h4 className="font-bold uppercase text-lg tracking-tighter">Title</h4>
        <p className="mt-[-5px] mb-[-2px] tracking-tighter uppercase text-[13px]">
          Description
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
