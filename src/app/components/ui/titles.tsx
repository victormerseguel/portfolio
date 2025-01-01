import { useTranslations } from "next-intl";

type TitlesProps = {
  text: string;
  small?: boolean;
};

const Titles = ({ small, text }: TitlesProps) => {
  const t = useTranslations("Header");
  const sm = 46;
  const def = 56;

  return (
    <div
      className={`uppercase font-black ${
        small ? "text-[46px] tracking-[-7px]" : "text-[56px] tracking-[-9px]"
      }`}
      style={{ wordSpacing: `${small ? "10px" : "15px"}` }}
    >
      {text}
    </div>
  );
};

export default Titles;
