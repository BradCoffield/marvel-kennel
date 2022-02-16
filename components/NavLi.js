 import Link from 'next/link';
 import navLinks from '../data/navLinks.json'


export default function NavLi() {
  return (
    <ul className="nav-li-insides">
      {navLinks.map((link) => {
        let lower = link.name.toLowerCase();
        return (
          <li key={link.name}>
            <Link href={lower}>
              <a >{link.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );}