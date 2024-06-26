// pages/index.jsx
"use client";
import React, { useContext } from "react";
import { UserInputContext } from "./context/Context";
import Link from "next/link";
// import { Button } from "@/components/ui/Button";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import WorkExperience from "@/components/ReviewSlider";

const Home = () => {
  const { userInput } = useContext(UserInputContext);

  return (
    <section className="h-full mb-20">
      <div className="container w-full h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/80">
              Full-Stack Software Developer
            </span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <div className="text-[#cbacf9] flex flex-row gap-[2vw] xl:justify-normal justify-center items-center">
                <div id="name">
                  {userInput.firstName || "Arnab"} {userInput.lastName || "Dev"}
                </div>
              </div>
            </h1>
            <p className="max-w-[500px] mb-9 text-white font-bold">
              Looking for SWE Intern roles.
            </p>
            <Stats />
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
        <Link href="cv.pdf">
          {/* <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button> */}
        </Link>
        <div className="mb-8 xl:mb-0">
          <Social
            containerStyles="flex gap-6"
            iconStyles="w-12 h-12 hover:w-14 hover:h-14  border border-[#cbacf9] rounded-full flex justify-center items-center text-[#cbacf9] text-base hover:bg-[#cbacf9] hover:text-primary hover:transition-all duration-primary"
          />
        </div>
      </div>

      <div>
        <WorkExperience />
      </div>
    </section>
  );
};

export default Home;
