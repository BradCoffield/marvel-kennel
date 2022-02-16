import { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
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
  return (
    <Menu
      isOpen={isMenuOpen}
      onStateChange={handleStateChange}
      right
      id="hammy"
    >
      <ul className="nav-li-insides">
        {navLinks.map((link) => {
          let lower = link.name.toLowerCase()
          return (
            <li key={link.name}>
              <Link href={lower}>
                <a onClick={() => handleCloseMenu()}>{link.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <ul className="nav-li-insides">
        <li>
          <Link href="/about">
            <a onClick={() => handleCloseMenu()}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/writing"><a onClick={() => handleCloseMenu()}>Writing</a></Link>
        </li>
        <li>
          <Link href="/teaching"><a onClick={() => handleCloseMenu()}>Teaching</a></Link>
        </li>
        <li>
          <Link href="/misc"><a onClick={() => handleCloseMenu()}>Misc</a></Link>
        </li>
        <li>
          <Link href="/contact"><a onClick={() => handleCloseMenu()}>Contact</a></Link>
        </li>
      </ul> */}
    </Menu>
  );
}
