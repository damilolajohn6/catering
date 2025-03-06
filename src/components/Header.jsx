import React from 'react'
import Nav from './Nav';
import MobileNav from './MobileNav';
import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {
  return (
    <div className="w-full">
      <div className="bg-[#C4ACB4AA] w-full">
        <header className="container py-5 relative z-10 w-full flex items-center justify-between px-6 lg:px-12 pt-6">
          <Link href="/">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#8A2823]">
              Qwik <span className="text-white">Catering</span>
            </h1>
          </Link>

          <nav className="hidden xl:flex gap-6 z-10">
            <Nav />
          </nav>

          <div className="block xl:hidden z-10">
            <MobileNav />
          </div>

          <div className="z-10 xl:flex hidden ">
            <Link href="/contact">
              <Button className="bg-[#8A2823] hover:bg-[#481513] text-white font-bold py-2 px-4 rounded-lg">
                Contact
              </Button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header