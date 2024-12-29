import { useContext } from "react";
import { navItems } from "../../data/nav";
import { Context } from "../../hooks/useContext";

const NavItems = () => {
  const { language } = useContext(Context);

  return (
    <ul className="flex justify-evenly items-center h-12 w-[425px] rounded-full bg-background text-sm mr-auto">
      {navItems.map((link) => (
        <li key={link.en} className="cursor-pointer hover:opacity-70">
          <a href={link.link}>{language === "en" ? link.en : link.pt}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
