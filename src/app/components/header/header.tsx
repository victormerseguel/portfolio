"use client";
import Navbar from "./nav-bar";
import { headerDB } from "../../data/header";
import { useContext } from "react";
import { Context } from "../../hooks/useContext";

const Header = () => {
  const { language } = useContext(Context);

  return (
    <header
      className="bg-fixed bg-center bg-no-repeat bg-cover rounded-br-[100px] rounded-bl-[100px] pb-24 pl-5 pr-5"
      style={{ backgroundImage: 'url("/bg-grain.jpg")' }}
    >
      <div className="content">
        <Navbar />
        <div className="flex flex-col items-center text-center mt-14">
          <h3 className="text-lg font-light mb-7">
            {language === "en" ? headerDB[0].en : headerDB[0].pt}
          </h3>
          <img
            src="/victor-photo-1.png"
            alt="Victor Merseguel"
            className="max-w-24 mb-3.5"
          />
          <h1 className="text-2xl font-light mb-7 leading-7">
            {language === "en" ? headerDB[1].en : headerDB[1].pt}
            <br />
            {language === "en" ? headerDB[2].en : headerDB[2].pt}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
