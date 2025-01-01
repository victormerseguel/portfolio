import Link from "next/link";
import NavSelect from "./nav-select";
import { contacts, links } from "@/texts/arraysMaps";
import { useTranslations } from "next-intl";

const NavContacts = () => {
  const t = useTranslations("Header");
  return (
    <div className="w-36  ">
      <ul className="flex flex-col gap-1.5 text-sm ml-auto">
        {contacts.map((contact) => (
          <li>
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
