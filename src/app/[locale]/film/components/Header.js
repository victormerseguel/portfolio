"use client";
import style from "./Header.module.css";

import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className={style.header}>
      <h1>Victor Merseguel</h1>
      <h2>Diretor, Colorista, Editor e Videógrafo</h2>
      <nav>
        <ul>
          <NavItem label="Trabalhos" id="works" />
          <NavItem label="Sobre" id="about" />
          <NavItem label="Contatos" id="contacts" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
