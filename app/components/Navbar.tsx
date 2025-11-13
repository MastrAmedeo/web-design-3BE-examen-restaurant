import Link from "next/link";
import {ReactNode} from "react";

type NavLinkProps = {
    href : string
    children : ReactNode
}

function NavLink(props: NavLinkProps) {
    return (
        <li className = "hover:bg-slate-600 py-3 px-3">
            <Link href = {props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar() {
  return (
    <nav className = "fixed top-0 left-0 right-0 bg-[#697851]/80 text-[#151910] shadow-xl py-4 z-50">
        <ul className = "container mx-auto flex gap-4 justify-center">
            <li><NavLink href="/vins">Notre vin</NavLink></li>
            <li><NavLink href="/">Acceuil</NavLink></li>
            <li><NavLink href="/vins">Notre huile</NavLink></li> 
        </ul>
    </nav>
  )
}