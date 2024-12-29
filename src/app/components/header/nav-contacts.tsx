"use client";
import { useContext } from "react";
import { Context } from "../../hooks/useContext";

const NavContacts = () => {
  const { language, setLanguage } = useContext(Context);
  console.log(language);

  return (
    <div className="w-36  ">
      <ul className="flex flex-col gap-1.5 text-sm ml-auto">
        <li>
          <a href="/">Linkedin</a>
        </li>
        <li>
          <a href="/">GitHub</a>
        </li>
        <li>
          <a href="/">{language === "en" ? "Resume" : "Currículo"}</a>
        </li>
        <li>
          <select
            name="lang"
            id="lang"
            onChange={(e) => setLanguage(e.target.value)}
            className="uppercase border-none ml-[-5px] bg-transparent cursor-pointer"
          >
            <option value="en">🇬🇧 en</option>
            <option value="pt">🇵🇹 pt</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default NavContacts;
