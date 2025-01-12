import Link from "next/link";
import NavSelect from "./nav-select";
import { useTranslations } from "next-intl";
import en from "@/texts/en.json";
import IconLink from "../project_page/icon-link";

const NavContacts = () => {
  const t = useTranslations("Header");
  const contacts = Object.keys(en.Header.contacts);

  return (
    <div className="md:w-36 mx-auto md:mx-0 ">
      <ul className="flex flex-row gap-2 items-center md:flex-col md:gap-1.5 md:items-start text-sm ">
        {contacts.map((contact, i) => (
          <>
            <li key={i}>
              <Link href={"/"} className="hidden md:block">
                {t(`contacts.${contact}`)}
              </Link>
              <Link
                href={"/"}
                key={i}
                className="hover:opacity-70 block md:hidden"
              >
                <IconLink icon={contact} />
              </Link>
            </li>
          </>
        ))}
        <li className="hidden md:block">
          <NavSelect />
        </li>
      </ul>
      <div className="flex md:hidden justify-center mx-auto mt-3 text-sm">
        <NavSelect />
      </div>
    </div>
  );
};

export default NavContacts;

{
  /* <div className="flex gap-5">
        {links.map((link, i) => (
          <Link href={"/"} key={i} className="hover:opacity-70">
            <IconLink icon={link} />
          </Link>
        ))} */
}
