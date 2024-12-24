// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
const experience = [
  {
    img: "/utd.png",
    company: "University of Texas at Dallas",
    position: "Undergraduate Research Assistant",
    content:
      "Working on dynamic analysis and fuzzing at professor Shiyi Wei’s lab.",
    timeline: "1 October 2024 - Present",
  },
  {
    img: "/bondstein.jpeg",
    company: "Bondstein Technologies",
    position: "Software Engineer Intern",
    content:
      "Worked using reactJS and nextJS frameworks, tailwind CSS, framer-motion, swiper, etc. Worked on building front end website from scratch, which was used as a sample to secure government project tender and on building full-stack website for NRI Jewelry.",
    timeline: "1 June 2024 - 2 August 2024",
  },
  {
    img: "/edification.png",
    company: "Edification",
    position: "CS Teaching Assistant",
    content:
      "Taught python fundamentals to students of class 9 to class 11. Assisted senior computer science teacher to teach his courses of GCSE O level Computer Science(2210)",
    timeline: "1 October 2022 - 1 December 2023",
  },
  {
    img: "/nifw.png",
    company: "Next Initiative Foundation",
    position: "President, Web Developer",
    content:
      "Recruited and led 300+ volunteers, chief organiser at multiple fund raising youth events of 4000+ participants. Our work has been featured in national TV channels like Atn Bangla and Ek Takar Khobor. Built portfolio website using React.",
    timeline: "1 August 2020 - Present",
  },
  {
    img: "/essstem.jpeg",
    company: "ESS STEM Club",
    position: "President",
    content:
      "• Leader during growth from 50 members to 200+ members, making it the school’s largest academic club. Chief organiser of intra-school events(Science fair, Science film festival, Science and Math Olympiad) and academic sessions. • Prepared question sets on Mathematics, Physics, Chemistry, ICT, Programming, and Astrophysics for olympiads.",
    timeline: "1 October 2021 - 1 January 2024",
  },
  {
    img: "/ess.jpeg",
    company: "European Standard School",
    position: "Class Prefect",
    content: "",
    timeline: "1 July 2022 - 30 June 2024",
  },
];

const WorkExperience = () => {
  return (
    <div className="font-secondary">
      <div className=" xl:py-8 md:px-5 flex flex-col items-center mt-10 text-bold">
        <div className="h1 text-center text-secondary">Work Experience</div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
        //   pagination={{ type: "fraction" }}
          autoplay={{ delay: 11000 }}
          loop
          navigation
          className="h-200 w-full rounded-lg"
        >
          {experience.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-secondary p-6 mt-10 rounded-[40px] shadow-2xl shadow-secondary w-[70vw] xl:w-[50vw] mx-auto text-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 3 }}
              >
                <div className="card-content flex flex-col items-center justify-center">
                  <Image
                    className="mb-10"
                    src={item.img}
                    width={300}
                    height={300}
                  />
                  <h1 className="mb-2 md:text-4xl text-3xl font-semibold">
                    {item.company}
                  </h1>
                  <h3 className="mb-2 md:text-xl text-md font-semibold">
                    {item.position}
                  </h3>
                  <p className="hidden md:flex mb-2 text-white/80">
                    {item.content}
                  </p>
                  <p className="mb-10 font-bold md:text-white text-white/80 text-sm">
                    {" "}
                    {item.timeline}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WorkExperience;
