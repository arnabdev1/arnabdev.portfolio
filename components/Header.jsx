"use client";
import React, { useContext, useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { UserInputContext } from "../app/context/Context";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const throttleTimeout = useRef(null);

  const handleScroll = useCallback(() => {
    if (throttleTimeout.current) return;
    
    throttleTimeout.current = setTimeout(() => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      throttleTimeout.current = null;
    }, 100);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [handleScroll]);

  const { userInput } = useContext(UserInputContext);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ease-in-out ${
        visible
          ? "translate-y-0 dark:xl:bg-primary xl:bg-[#492c74] dark:xl:bg-opacity-75  xl:bg-opacity-75"
          : "-translate-y-full xl:bg-transparent"
      }`}
    >
      <div className="py-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="flex flex-row text-4xl font-semibold gap-0">
              <div id="firstname">{userInput.firstName || "AD"}</div>
              <span className="text-[#cbacf9]">.</span>
            </h1>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            <ThemeSwitch className="w-40" />

            <Nav />

            <Link href="/cv.pdf" target="_blank">
              <button className="transition-all duration-300 p-3 rounded-full text-lg border-white border-2 hover:border-transparent font-light text-white bg-transparent hover:scale-110 hover:bg-[#cbacf9] hover:text-black active:bg-[#cbacf9] focus:outline-none focus:text-white active:text-black focus:ring focus:ring-[#ffffff]">
                Hire me
              </button>
            </Link>
          </div>
          <div className="xl:hidden flex flex-row gap-5 justify-center items-center">
            <ThemeSwitch className="w-40" />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
