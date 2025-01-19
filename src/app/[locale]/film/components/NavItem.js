"use client";
import style from "./Header.module.css";

import { useContext } from "react";
import { Context } from "../hooks/ContextFilm";
import { Link } from "@/i18n/routing";

const NavItem = ({ label, id }) => {
  const { currentMenu, setCurrentMenu } = useContext(Context);

  const handleClickMenu = ({ target }) => {
    target.id === "" ? null : setCurrentMenu(target.id);
    return;
  };

  return (
    <li
      className={`${style.menu} ${currentMenu === id ? style.currentMenu : ""}`}
      onClick={(e) => handleClickMenu(e)}
    >
      <Link href={`/film/${id}`} id={id}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
