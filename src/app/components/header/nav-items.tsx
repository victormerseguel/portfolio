import { navItems, navItemsProps } from "../../data/nav";

const NavItems = ({ lang }: { lang: string }) => {
  return (
    <ul className="flex justify-evenly items-center h-12 w-[425px] rounded-full bg-background text-sm mr-auto">
      {navItems.map((link) => (
        <li key={link.en} className="cursor-pointer hover:opacity-70">
          <a href={link.link}>{link[lang as keyof navItemsProps]}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
