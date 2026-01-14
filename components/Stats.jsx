"use client";
import CountUp from "react-countup";
import { memo } from "react";

const stats = [
  {
    num: "4",
    text: "Years of Experience",
  },
  {
    num: "12",
    text: "Projects Completed",
  },
  {
    num: "30",
    text: "Technologies Learned",
  },
];

const Stats = memo(() => {
  return (
    <section className="w-full pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="flex flex-row gap-3 w-full mx-auto xl:max-w-none">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex-row flex-1 flex md:gap-2 gap-1 items-center justify-center  xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="md:text-4xl sm:text-2xl text-xl xl:text-6xl font-extrabold"
              />
              <p
                className={` 
                            ${
                              item.text.length < 15
                                ? "max-w-[80px]"
                                : "max-w-[120px]"
                            } leading-snug text-white/80 md:text-lg text-xs sm:text-sm`}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
});

Stats.displayName = 'Stats';

export default Stats;
