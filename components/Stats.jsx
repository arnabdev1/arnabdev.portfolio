"use client";
import  CountUp  from "react-countup"
const stats = [
  {
    num: "2",
    text: "Years of Experience",
  },
  {
    num: "5",
    text: "Projects Completed",
  },
  {
    num: "6",
    text: "Technologies Learned",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container  mx-auto">
        <div className="flex  flex-row gap-3 max-w-[100vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex-row flex-1 flex gap-2 items-center justify-center  xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={` 
                            ${
                              item.text.length < 15
                                ? "max-w-[80px]"
                                : "max-w-[140px]"
                            } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats