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
    img: "/bondstein.jpeg",
    company: "Bondstein Technologies",
    position: "Software Engineer Intern",
    content:
      "Worked as a full-stack developer using reactJS, nextJS, and tailwind CSS",
    timeline: "1 June 2024 - Present",
  },
  {
    img: "/nifw.png",
    company: "Next Initiative Foundation",
    position: "President",
    content:
      "Chiefly organized intricate projects and engaged in myriad community activities to work towards reducing the suffering of people and the e=ffect of environmental pollution in Bangladesh. Recruited and led a team of 50+ Campus Ambassadors and 100+ volunteers. Organised events to plant/distribute 1000+ plants. Raised funds to contribute towards the affected people during the COVID-19 pandemic, and provided assistance(food and clothing) to 1000+ people in local areas through charity events. Chief Organizer at multiple youth events of 4000+ participants. Our work has been featured in national TV channels like Atn Bangla and Ek Takar Khobor.",
    timeline: "1 August 2020 - Present",
  },
  {
    img: "/essstem.jpeg",
    company: "ESS STEM Club",
    position: "President",
    content:
      "Leader during growth from 50 members to 200+ members, making it the school’s largest academic club. Chief organiser of intra-school events(Science fair, Science film festival, Science and Math Olympiad) and academic sessions. Prepared question sets on Mathematics, Physics, Chemistry, ICT, Programming, and Astrophysics for olympiads.",
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
    <div className="">
      <div className=" xl:py-8 px-5 flex flex-col items-center mt-10 text-bold">
        <div className="h1 text-secondary">Work Experience</div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
        //   pagination={{ type: "fraction" }}
          autoplay={{ delay: 3000 }}
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
                  <h1 className="mb-2 xl:text-4xl text-3xl font-semibold">
                    {item.company}
                  </h1>
                  <h3 className="mb-2 xl:text-xl text-md font-semibold">
                    {item.position}
                  </h3>
                  <p className="hidden xl:flex mb-2 text-white/60">
                    {item.content}
                  </p>
                  <p className="mb-10 font-bold xl:text-white text-white/60 text-sm">
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
