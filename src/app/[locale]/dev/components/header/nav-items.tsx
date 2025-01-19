import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import en from "@/texts/en.json";

const NavItems = () => {
  const t = useTranslations("Header");
  const links = Object.keys(en.Header.links);

  return (
    <ul className="hidden md:flex justify-evenly items-center h-12 w-[340px] lg:w-[425px] rounded-full bg-background text-sm mr-auto">
      {links.map((link, i) => (
        <li
          className="uppercase font-semibold cursor-pointer hover:opacity-70"
          key={i}
        >
          <Link href={`/dev/#${link}`}>{t(`links.${link}`)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
