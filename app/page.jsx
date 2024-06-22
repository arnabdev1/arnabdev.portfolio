
"use client"
import React, { createContext } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container w-full h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Full-Stack Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Arnab Dev</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex  items-center gap-2 "
              >
                <span>Download CV</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-primary"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
        
        
        <div className=" bg-zinc-10 border-t-[1px] border-accent  rounded-3xl flex justify-center items-center py-5 px-20 text-black">
          {/* {["Educational Events","Food drives and tree plantations"].map((item,index)=> 
                    (<p className='text-md font-light tracking-tight leading-none'>{item}</p>
                    ))} */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: [3] }}
            className="w-full  flex justify-center items-center align-middle gap-5"
          >
            <a
              href="https://www.instagram.com/nextinitiative1/"
              target="_blank"
            >
              <img
                src="ig.png"
                className='transition-all duration-300 hover:w-[130px] w-[100px] font-light text-md  rounded-full capitalize"'
              />
            </a>
            <a href="https://www.facebook.com/nextinitiativebd" target="_blank">
              <img
                src="fb.png"
                className="transition-all duration-300 hover:w-[130px] w-[100px] font-light text-md  rounded-full capitalize"
              />
            </a>
            <div>
              <a
                href="https://www.linkedin.com/company/nextinitiative"
                target="_blank"
              >
                <img
                  src="in.png"
                  className="transition-all duration-300 hover:w-[130px] w-[100px] font-light text-md  rounded-full capitalize"
                />
              </a>
            </div>
          </motion.div>
        </div>




      </div>
    </section>
  );
};

export default Home;
