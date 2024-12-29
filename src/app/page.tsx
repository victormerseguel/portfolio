import Image from "next/image";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Projects />
    </div>
  );
}
