import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { links } from "@/texts/arraysMaps";

const NavItems = () => {
  const t = useTranslations("Header");

  return (
    <ul className="flex justify-evenly items-center h-12 w-[425px] rounded-full bg-background text-sm mr-auto">
      {links.map((link) => (
        <li className="cursor-pointer hover:opacity-70">
          <Link href={`/#${link}`}>{t(`links.${link}`)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
