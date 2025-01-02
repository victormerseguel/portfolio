import { useTranslations } from "next-intl";
import Titles from "../ui/titles";
import Image from "next/image";
import Button from "../ui/button";

const About = () => {
  const t = useTranslations("About");

  return (
    <div>
      <div className="content relative">
        <Titles text={t("title")} />
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
            <p className="">{t("text.p1")}</p>
            <p>{t("text.p2")}</p>
            <h4>{t("skills_title")}</h4>
            <p>{t("skills_items")}</p>
            <h4>{t("another_title")}</h4>
            <p>{t("another_items")}</p>
            <Button text={t("button")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
