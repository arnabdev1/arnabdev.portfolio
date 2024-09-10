import Link from "next/link";
import React from "react";

const ProjectCard = ({ name, tech, bg, description ,link}) => {
  return (
    <div className="group  [perspective:1000px] my-[20px] mx-3 flex flex-wrap flex-row justify-center items-center w-auto">
      {/* Card Container */}
      <Link href={link}>
        <div className="relative w-[300px] h-[160px] md:w-[440px] md:h-[230px] [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <div className="flex flex-col justify-end h-full p-4 bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-white text-2xl font-semibold">{name}</h3>
                <p className="text-white text-sm mt-1">{tech}</p>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 w-full h-full bg-secondary rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-6">
            <p className="text-gray-800 text-center">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
