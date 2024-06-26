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
const reviews = [
  {
    img: "/bondstein.jpeg",
    company: "Bondstein Technologies",
    position: "Software Engineer Intern",
    content:
      "Ad ad Lorem esse proident minim esse amet nostrud laboris proident. Nulla reprehenderit duis aute duis commodo dolore aliquip reprehenderit veniam eiusmod qui esse dolor. Id laborum id Lorem consectetur. Nostrud in anim irure ut. Do cupidatat minim in id enim. Tempor occaecat sint duis ipsum voluptate eu cillum aliqua deserunt ullamco tempor duis veniam.",
    timeline: "1 June 2024 - Present",
  },
  {
    img: "/nifw.png",
    company: "Next Initiative Foundation",
    position: "President",
    content:
      "Ad ad Lorem esse proident minim esse amet nostrud laboris proident. Nulla reprehenderit duis aute duis commodo dolore aliquip reprehenderit veniam eiusmod qui esse dolor. Id laborum id Lorem consectetur. Nostrud in anim irure ut. Do cupidatat minim in id enim. Tempor occaecat sint duis ipsum voluptate eu cillum aliqua deserunt ullamco tempor duis veniam.",
    timeline: "1 August 2020 - Present",
  },
  {
    img: "/essstem.jpeg",
    company: "ESS STEM Club",
    position: "President",
    content:
      "Ad ad Lorem esse proident minim esse amet nostrud laboris proident. Nulla reprehenderit duis aute duis commodo dolore aliquip reprehenderit veniam eiusmod qui esse dolor. Id laborum id Lorem consectetur. Nostrud in anim irure ut. Do cupidatat minim in id enim. Tempor occaecat sint duis ipsum voluptate eu cillum aliqua deserunt ullamco tempor duis veniam.",
    timeline: "1 October 2021 - 1 January 2024",
  },
  {
    img: "/ess.jpeg",
    company: "European Standard School",
    position: "Class Prefect",
    content:
      "Ad ad Lorem esse proident minim esse amet nostrud laboris proident. Nulla reprehenderit duis aute duis commodo dolore aliquip reprehenderit veniam eiusmod qui esse dolor. Id laborum id Lorem consectetur. Nostrud in anim irure ut. Do cupidatat minim in id enim. Tempor occaecat sint duis ipsum voluptate eu cillum aliqua deserunt ullamco tempor duis veniam.",
    timeline: "1 July 2022 - 30 June 2024",
  },
];

const ReviewSlider = () => {
  return (
    <div className="">
      <div className=" xl:py-8 flex flex-col items-center mt-10 text-bold">
        <div className="h1  text-secondary">Work Experience</div>
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
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-secondary p-6 mt-10 rounded-[40px] shadow-2xl shadow-secondary w-[50vw] mx-auto text-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 3 }}
              >
                <div className="card-content flex flex-col items-center justify-center">
                  <Image
                    className="mb-10"
                    src={review.img}
                    width={300}
                    height={300}
                  />
                  <h1 className="mb-2 xl:text-4xl text-3xl font-semibold">
                    {review.company}
                  </h1>
                  <h3 className="mb-2 xl:text-xl text-md font-semibold">
                    {review.position}
                  </h3>
                  <p className="hidden xl:flex mb-2 text-white/60">
                    {review.content}
                  </p>
                  <p className="mb-10 font-bold xl:text-white text-white/60 text-sm">
                    {" "}
                    {review.timeline}
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

export default ReviewSlider;
