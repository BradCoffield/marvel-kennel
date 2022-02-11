 
import { slide as Menu } from "react-burger-menu";
import NavLi from "./NavLi";

export default function HamburgerMenu() {
  return (
    <Menu right id="hammy">
      <NavLi />
    </Menu>
  );
}
