type TitlesProps = {
  text: string;
  small?: boolean;
  position: "start" | "center" | "end";
};

const Titles = ({ small, text, position }: TitlesProps) => {
  return (
    <h3
      className={`uppercase font-black md:mb-8 justify-self-center ${
        small ? "text-[46px] tracking-[-7px]" : "text-[56px] tracking-[-9px]"
      } md:justify-self-${position}`}
      style={{ wordSpacing: `${small ? "10px" : "15px"}` }}
    >
      {text}
    </h3>
  );
};

export default Titles;
