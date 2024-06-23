"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "cv.pdf",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet className="">
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#cbacf9]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className=" mt-10 mb-10 text-center text-2xl">Arnab Dev</div>

        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-[#cbacf9] border-b-2 border-[#cbacf9]"
              } capitalize font-medium hover:text-[#cbacf9]   transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;