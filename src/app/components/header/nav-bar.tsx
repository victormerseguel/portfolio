import NavContacts from "./nav-contacts";
import NavItems from "./nav-items";
import Titles from "../ui/titles";

const Navbar = () => {
  return (
    <nav className="flex items-start justify-center pt-12 w-full">
      <a href="/" className="mr-auto cursor-pointer w-36">
        <Titles text="Victor" small />
      </a>
      <NavItems />
      <NavContacts />
    </nav>
  );
};

export default Navbar;
