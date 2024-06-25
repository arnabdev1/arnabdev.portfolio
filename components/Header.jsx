// components/Header.jsx
"use client"
import React, { useContext } from "react";
import Link from "next/link";
import { UserInputContext } from "../app/context/Context";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

const Header = () => {
  const { userInput } = useContext(UserInputContext);
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="flex flex-row text-4xl font-semibold gap-0">
            <div id="firstname">{userInput.firstName || "AD"}</div>
            <span className="text-[#cbacf9]">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <button className="transition-all duration-300 p-5 rounded-full text-lg border-white border-2 hover:border-0 font-light text-white bg-transparent hover:text-xl hover:bg-[#cbacf9] hover:text-black active:bg-[#cbacf9] focus:outline-none focus:text-white active:text-black focus:ring focus:ring-[#ffffff]">
              Hire me
            </button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
