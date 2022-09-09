import { useState } from "react";
import Link from "next/link";
import { bubble as Menu } from "react-burger-menu";
 import navLinks from "../data/navLinks.json";

// import NavLi from "./NavLi";

export default function HamburgerMenu() {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };


  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      right
      id="hammy"
    >
      <ul className="nav-li-insides">
        {navLinks.map((link) => {
          let lower = link.name.toLowerCase();
          return (
            <li key={link.name}>
              <Link href={link.path} onClick={closeSideBar}>
                <a onClick={closeSideBar}>{link.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Menu>
  );
}
