import { Link } from "@/i18n/routing";
import Button from "../ui/button";

const ProjectNavButton = ({ text }: { text: string }) => {
  return (
    <Link href={"#footer"}>
      <Button text={text} dark />
    </Link>
  );
};

export default ProjectNavButton;
