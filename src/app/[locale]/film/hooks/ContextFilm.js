"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMenu, setCurrentMenu] = useState("works");

  return (
    <Context.Provider value={{ currentMenu, setCurrentMenu }}>
      {children}
    </Context.Provider>
  );
};
