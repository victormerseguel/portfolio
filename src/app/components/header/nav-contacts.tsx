import Link from "next/link";
import NavSelect from "./nav-select";
import { useTranslations } from "next-intl";
import en from "@/texts/en.json";

const NavContacts = () => {
  const t = useTranslations("Header");
  const contacts = Object.keys(en.Header.contacts);

  return (
    <div className="w-36  ">
      <ul className="flex flex-col gap-1.5 text-sm ml-auto">
        {contacts.map((contact, i) => (
          <li key={i}>
            <Link href={"/"}>{t(`contacts.${contact}`)}</Link>
          </li>
        ))}
        <li>
          <NavSelect />
        </li>
      </ul>
    </div>
  );
};

export default NavContacts;
