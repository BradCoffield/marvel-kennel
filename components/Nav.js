import MainNavStyles from './styles/MainNavStyles';
import NavLi from './NavLi';
import HamburgerMenu from "./HamburgerMenu";


export default function Nav() {
  return (
    <MainNavStyles>
      <div id="nav-left">
        <span id="h1-wrap">
          <h1>Ashley Kunsa</h1>
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
