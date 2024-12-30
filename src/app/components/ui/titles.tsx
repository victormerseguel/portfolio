type ObjectProps = {
  en: string;
  pt: string;
  link: string;
};

type TitlesProps = {
  text?: string;
  object?: ObjectProps;
  small?: boolean;
  lang?: string;
};

const Titles = ({ text, object, small, lang }: TitlesProps) => {
  const sm = 46;
  const def = 56;

  return (
    <div
      className={`uppercase font-black ${
        small ? "text-[46px] tracking-[-7px]" : "text-[56px] tracking-[-9px]"
      }`}
    >
      {object ? object[lang as keyof ObjectProps] : text}
    </div>
  );
};

export default Titles;
