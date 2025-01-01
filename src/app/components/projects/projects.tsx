import Titles from "../ui/titles";
import { useTranslations } from "next-intl";
import Button from "../ui/buttom";
import NorthEastArrow from "../ui/north-east-arrow";

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <div className="content pt-14" id="projects">
      <Titles text={t("title")} />
      <Button text={t("button")} image={<NorthEastArrow />} />
    </div>
  );
};

export default Projects;
