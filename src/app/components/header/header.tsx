import Navbar from "./nav-bar";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header
      className="bg-fixed bg-center bg-no-repeat bg-cover rounded-br-[100px] rounded-bl-[100px] pb-24 pl-5 pr-5"
      style={{ backgroundImage: 'url("/bg-grain.jpg")' }}
    >
      <div className="content">
        <Navbar />
        <div className="flex flex-col items-center text-center mt-14">
          <h3 className="text-lg font-light mb-7">{t("title")}</h3>
          <img
            src="/victor-photo-1.png"
            alt="Victor Merseguel"
            className="max-w-24 mb-3.5"
          />
          <h1 className="text-2xl font-light mb-7 leading-7">
            {t("subtitle_1")}
            <br />
            {t("subtitle_2")}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
