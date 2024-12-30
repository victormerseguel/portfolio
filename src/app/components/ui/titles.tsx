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
      className={`uppercase font-black ${
        small ? "text-[46px] tracking-[-7px]" : "text-[56px] tracking-[-9px]"
      }`}
    >
      {object ? (language === "en" ? object?.en : object.pt) : text}
    </div>
  );
};

export default Titles;
