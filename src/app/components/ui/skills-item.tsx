import dynamic from "next/dynamic";

type SkillsItemProps = { item: string; text: string };

const SkillsItem = ({ item, text }: SkillsItemProps) => {
  const IconComponent = dynamic(() => import(`../ui/icons/${item}`));
  return (
    <div className="flex items-center space-x-2">
      <span className="[&>svg]:w-[25px]">{<IconComponent />}</span>
      <p className="uppercase text-sm">{text}</p>
    </div>
  );
};

export default SkillsItem;
