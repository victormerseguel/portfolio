import Navbar from "./nav-bar";
import { headerDB, HeaderProps } from "../../data/header";

const Header = ({ lang }: { lang: string }) => {
  return (
    <header
      className="bg-fixed bg-center bg-no-repeat bg-cover rounded-br-[100px] rounded-bl-[100px] pb-24 pl-5 pr-5"
      style={{ backgroundImage: 'url("/bg-grain.jpg")' }}
    >
      <div className="content">
        <Navbar lang={lang} />
        <div className="flex flex-col items-center text-center mt-14">
          <h3 className="text-lg font-light mb-7">
            {headerDB[0][lang as keyof HeaderProps]}
          </h3>
          <img
            src="/victor-photo-1.png"
            alt="Victor Merseguel"
            className="max-w-24 mb-3.5"
          />
          <h1 className="text-2xl font-light mb-7 leading-7">
            {headerDB[1][lang as keyof HeaderProps]}
            <br />
            {headerDB[2][lang as keyof HeaderProps]}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
