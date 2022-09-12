import MainNavStyles from './styles/MainNavStyles';
import NavLi from './NavLi';
import HamburgerMenu from "./HamburgerMenu";
 import Link from "next/link";


export default function Nav() {
  return (
    <MainNavStyles>
      <div id="nav-left">
        <span id="h1-wrap">
          <a href="/">
                 <h1>Marvel kennel</h1>
          </a>
        </span>
      </div>
      <div id="nav-right" className="font-2">
        <NavLi />
      </div>
      <div id="hammy-wrap">
        <HamburgerMenu menuStatus={"closed"} />
      </div>
    </MainNavStyles>
  );
}
