"use client";
import { createContext, ReactNode, useState } from "react";

export const Context = createContext({
  language: "",
  setLanguage: (value: string) => {},
});

interface ProvideProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ProvideProps) => {
  const [language, setLanguage] = useState("en");

  return (
    <Context.Provider value={{ language, setLanguage }}>
      {children}
    </Context.Provider>
  );
};
