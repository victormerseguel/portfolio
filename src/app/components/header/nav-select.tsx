"use client";
import React from "react";

const NavSelect = () => {
  return (
    <select
      name="lang"
      id="lang"
      onChange={(e) => console.log(e.target.value)}
      className="uppercase border-none ml-[-5px] bg-transparent cursor-pointer"
    >
      <option value="en">🇬🇧 en</option>
      <option value="pt">🇵🇹 pt</option>
    </select>
  );
};

export default NavSelect;
