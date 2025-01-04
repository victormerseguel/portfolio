import dynamic from "next/dynamic";

type AboutSkillsProps = { item: string; text: string };

const AboutSkills = async ({ item, text }: AboutSkillsProps) => {
  const IconComponent = dynamic(() => import(`../ui/icons/${item}`));
  return (
    <div className="flex items-center space-x-2">
      {<IconComponent />} <p className="uppercase text-sm">{text}</p>
    </div>
  );
};

export default AboutSkills;
