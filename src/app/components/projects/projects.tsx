import Titles from "../ui/titles";
import { navItems } from "../../../texts/nav";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <div className="content pt-14" id="projects">
      <Titles text={t("title")} />
    </div>
  );
};

export default Projects;
