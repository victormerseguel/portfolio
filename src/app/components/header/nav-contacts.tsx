import NavSelect from "./nav-select";

const NavContacts = ({ lang }: { lang: string }) => {
  return (
    <div className="w-36  ">
      <ul className="flex flex-col gap-1.5 text-sm ml-auto">
        <li>
          <a href="/">Linkedin</a>
        </li>
        <li>
          <a href="/">GitHub</a>
        </li>
        <li>
          <a href="/">{lang === "en" ? "Resume" : "Currículo"}</a>
        </li>
        <li>
          <NavSelect />
        </li>
      </ul>
    </div>
  );
};

export default NavContacts;
