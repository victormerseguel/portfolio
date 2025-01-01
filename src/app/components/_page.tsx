import React from "react";
import Header from "./header/header";
import Projects from "./projects/projects";

const Page = ({ lang }: { lang: string }) => {
  return (
    <div>
      <Header />
      <Projects />
    </div>
  );
};

export default Page;
