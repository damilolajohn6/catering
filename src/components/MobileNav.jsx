"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menus" },
  { href: "/services", label: "Our Services" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <Button className="bg-[#8A2823] hover:bg-[#481513]">
          <CiMenuFries className="text-[52px] text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col bg-white p-6">
        <div className="mb-8 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Qwik <span className="text-[#8A2823]">Catering</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col text-white  gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`capitalize font-bold transition-all text-[#8A2823] ${
                link.href === pathname
                  ? "text-[#8A2823] border-b-2 border-[#8A2823]"
                  : "hover:text-pink-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-[#8A2823] hover:bg-[#481513] text-white font-bold py-2 px-4 rounded-lg">
              Contact
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;