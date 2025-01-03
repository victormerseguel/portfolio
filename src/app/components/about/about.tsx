import { useTranslations } from "next-intl";
import Titles from "../ui/titles";
import Image from "next/image";
import Button from "../ui/button";
import { skills, anotherSkills } from "@/texts/arraysMaps";
import AboutSkills from "./about-skills";

const About = () => {
  const t = useTranslations("About");

  return (
    <div
      className="bg-fixed bg-center bg-no-repeat bg-cover pb-[100px] rounded-b-[100px]"
      style={{ backgroundImage: 'url("/bg-grain.jpg")' }}
      id="about"
    >
      <div className="w-full h-[100px] bg-background rounded-b-[100px] mb-16"></div>
      <div className="content relative">
        <Titles text={t("title")} right />
        <div className="flex w-full space-x-12">
          <div className="relative w-44 h-[calc(176px_*_1.33)] flex-shrink-0">
            <Image
              src={"/victor-profile-picture.jpg"}
              alt="Victor Merseguel"
              fill
              className="rounded-xl"
            />
          </div>
          <div>
            <p className="mb-2">{t("text.p1")}</p>
            <p>{t("text.p2")}</p>
            <h4 className="uppercase font-bold mb-3 mt-12">
              {t("skills_title")}
            </h4>
            <div className="grid grid-cols-3 space-y-2 text-lightGray mt-2 mb-12">
              {skills.map((skill, i) => (
                <AboutSkills
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
                <span>
                  {t(`another_items.${item}`)}
                  {i < anotherSkills.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <Button text={t("button")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
