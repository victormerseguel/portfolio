import React from "react";
import Header from "./header/header";
import Projects from "./projects/projects";

const Page = ({ lang }: { lang: string }) => {
  return (
    <div>
      <Header lang={lang} />
      <Projects lang={lang} />
    </div>
  );
};

export default Page;
