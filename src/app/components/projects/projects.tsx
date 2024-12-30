import Titles from "../ui/titles";
import { navItems } from "../../data/nav";

const Projects = ({ lang }: { lang: string }) => {
  return (
    <div className="content pt-14">
      <Titles object={navItems[0]} lang={lang} />
    </div>
  );
};

export default Projects;
