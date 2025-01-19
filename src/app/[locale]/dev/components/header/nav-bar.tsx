import NavContacts from "./nav-contacts";
import NavItems from "./nav-items";
import Titles from "../ui/titles";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-start justify-center pt-12 w-full">
      <div className="mx-auto md:mr-auto cursor-pointer w-36">
        <Titles text="Victor" small position="start" />
      </div>
      <NavItems />
      <NavContacts />
    </nav>
  );
};

export default Navbar;
