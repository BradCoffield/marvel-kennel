 import Link from 'next/link';


export default function NavLi() {
  return (
 
      <ul className="nav-li-insides">
          <li>
            <Link href="/about" className="link-hover">About </Link>
          </li>
          <li>
            <Link href="/writing" className="link-hover">Writing </Link>
          </li>
          <li>
            <Link href="/teaching" className="link-hover">Teaching </Link>
          </li>
          <li>
            <Link href="/misc" className="link-hover">Misc </Link>
          </li>
          <li>
            <a href="/about#contact" className="link-hover">Contact</a>
          </li>
      </ul>
   
  );}