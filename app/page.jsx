"use client";
import React, { createContext } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Image from "next/image";
import Stats from "@/components/Stats";
import Link from "next/link";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container w-full h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/80">
              Full-Stack Software Developer
            </span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-[#cbacf9]">Arnab Dev</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white font-bold">
              Looking for SWE Intern roles.
              {/* <br />
              <div className="text-white/80">
                I am proficient in various programming languages and
                technologies.
              </div> */}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="cv.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex  items-center gap-2 "
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl " />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#cbacf9] rounded-full flex justify-center items-center text-[#cbacf9] text-base hover:bg-[#cbacf9] hover:text-primary hover:transition-all duration-primary"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;