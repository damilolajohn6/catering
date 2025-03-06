"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menus" },
  { href: "/services", label: "Our Services" },
];

const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className="flex text-black gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`capitalize font-bold transition-all text-white ${
            link.href === pathname
              ? "text-[#481513] border-b-2 border-[#481513]"
              : "hover:text-[#381413]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};


export default Nav;