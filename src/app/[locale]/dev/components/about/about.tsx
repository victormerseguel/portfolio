import { useTranslations } from "next-intl";
import Titles from "../ui/titles";
import Image from "next/image";
import Button from "../ui/button";
import SkillsItem from "../ui/skills-item";
import en from "@/texts/en.json";
import Link from "next/link";
import ResumeButton from "./resume-button";

const About = () => {
  const t = useTranslations("About");
  const skills = Object.keys(en.About.skills_items);
  const anotherSkills = Object.keys(en.About.another_items);

  return (
    <div
      className="bg-fixed bg-center bg-no-repeat bg-cover pb-[100px] rounded-b-[50px] md:rounded-b-[100px]"
      style={{ backgroundImage: 'url("/bg-grain.jpg")' }}
      id="about"
    >
      <div className="w-full h-[100px] bg-background rounded-b-[50px] md:rounded-b-[100px] mb-16"></div>
      <div className="content relative">
        <Titles text={t("title")} position="end" />
        <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-12">
          <div className="relative w-44 h-[calc(176px_*_1.33)] flex-shrink-0">
            <Image
              src={"/victor-profile-picture.jpg"}
              alt="Victor Merseguel"
              fill
              sizes="176px"
              className="rounded-xl"
            />
          </div>
          <div>
            <p className="mb-3">{t("text.p1")}</p>
            <p className="mb-3">{t("text.p2")}</p>
            <p className="mb-3">{t("text.p3")}</p>
            <p>{t("text.p4")}</p>
            <h4 className="uppercase font-bold mb-3 mt-12">
              {t("skills_title")}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 space-y-2 text-lightGray mt-2 mb-12">
              {skills.map((skill, i) => (
                <SkillsItem
                  item={t(`skills_items.${skill}.icon`)}
                  text={t(`skills_items.${skill}.text`)}
                  key={i}
                />
              ))}
            </div>
            <h4 className="uppercase font-bold text-sm mb-3">
              {t("another_title")}
            </h4>
            <p className="uppercase text-lightGray text-sm mb-12">
              {anotherSkills.map((item, i) => (
                <span key={i}>
                  {t(`another_items.${item}`)}
                  {i < anotherSkills.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <div className="mx-auto md:ml-0 w-fit">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
