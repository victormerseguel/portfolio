import { useTranslations } from "next-intl";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

export default function HomePage() {
  const t = useTranslations("Header");
  return (
    <div>
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
