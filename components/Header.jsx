// components/Header.jsx
"use client"
import React, { useContext } from "react";
import Link from "next/link";
import { UserInputContext } from "@/components/context";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

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
            <Button>Hire me</Button>
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
