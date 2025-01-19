import Image from "next/image";

type SkillsItemProps = { item: string; text: string };

const SkillsItem = ({ item, text }: SkillsItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="[&>svg]:w-[25px]">
        {<Image src={`/${item}-icon.svg`} alt={text} width={30} height={30} />}
      </span>
      <p className="uppercase text-sm">{text}</p>
    </div>
  );
};

export default SkillsItem;
