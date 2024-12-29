"use client";
import { useContext } from "react";
import { Context } from "../../hooks/useContext";

type TitlesProps = {
  text?: string;
  object?: {
    en: string;
    pt: string;
    link: string;
  };
  small?: boolean;
};

const Titles = ({ text, object, small }: TitlesProps) => {
  const { language } = useContext(Context);
  const sm = 46;
  const def = 56;

  return (
    <div
      style={{
        fontSize: `${small ? sm : def}px`,
        textTransform: "uppercase",
        letterSpacing: `${(small ? sm : def) * -0.12}px`,
        fontWeight: 900,
      }}
    >
      {object ? (language === "en" ? object?.en : object.pt) : text}
    </div>
  );
};

export default Titles;
