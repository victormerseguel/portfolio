import Image from "next/image";
import Navbar from "./nav-bar";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header
      className="bg-fixed bg-center bg-no-repeat bg-cover rounded-b-[70px] md:rounded-b-[100px] pb-24 px-5"
      style={{ backgroundImage: 'url("/bg-grain.jpg")' }}
    >
      <div className="content">
        <Navbar />
        <div className="flex flex-col items-center text-center mt-14">
          <h3 className="text-base font-light mb-7">{t("title")}</h3>
          <Image
            src={"/victor-photo-1.png"}
            alt={"Victor Merseguel"}
            width={96}
            height={96}
          />
          <h1 className="text-xl md:text-2xl font-light mt-7 leading-7">
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
