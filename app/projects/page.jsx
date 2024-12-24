"use client"
import ProjectCard from '@/components/ProjectCard';
import React from 'react'

const Projects = () => {
  const data = [
    {
      name: "HydraWatch",
      img: "/hydra.png",
      description:
        "Web app that can visualize pipeline data through an interactive dashboard to help lease operators make informed decisions quickly. Key features include detection and prediction of hydrate formation based on current gas injection metrics. ",
      tech: "Flask, Next.js, ML",
      link: "https://devpost.com/software/lorem-ipsum-zxuv8p",
    },
    {
      name: "LegalAI",
      img: "/legal.png",
      description:
        "The chatbot is designed to handle legal inquiries. Allows users to upload legal documents and receive detailed insights and guidance through the AI-powered analysis provided by LegalAI.",
      tech: "React, Amazon Q, SageMaker, and Bedrock",
      link: "https://legalai-test.netlify.app/",
    },
    {
      name: "Kormi App",
      img: "/kormi.png",
      description:
        "Full stack project where domestic workers can be hired. Used various technologies like Context API, React Router Dom, SCSS, React leaflet, etc",
      tech: "MERN Stack(React, Node.js, MongoDB)",
      link: "https://kormi.netlify.app/",
    },
    {
      name: "Code Editor/IDE",
      img: "/ide.png",
      description:
        "In-browser code editor that supports multiple languages! Used the Monaco react library for the code editor, Chakra UI to style the app, and the Piston API to execute the code.",
      tech: "React",
      link: "https://arnab-ide.netlify.app/",
    },
    {
      name: "Simple Calculator",
      img: "/simplecalc.png",
      description: "In-browser calculator using react, CSS, and framer motion.",
      tech: "React",
      link: "https://arnab-calc.netlify.app/",
    },
    {
      name: "Next Initiative Foundation Portfolio",
      img: "/nifportfolio.png",
      description: "Portfolio website for fundraising purposes built for a non profit organization.",
      tech: "React",
      link: "https://nextinitiative.netlify.app/",
    },
    {
      name: "Personal Portfolio",
      img: "/personalportfolio.png",
      description: "You are looking at it!",
      tech: "Next.js",
      link: "https://arnabdev.netlify.app/",
    },
  ];
  return (
    // <div className="flex flex-col w-full items-center justify-center">
    //   <div className=" mt-20">Section Under Construction</div>
    //   <div className="">For now check my resume for the projects:</div>
    //   <button
    //     className="bg-secondary rounded-full p-2 mt-2"
    //     onClick={() => (window.location.href = "/cv.pdf")}
    //   >
    //     Resume
    //   </button>
    // </div>
    <div className="mt-[80px] flex flex-wrap">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          name={item.name}
          bg={item.img}
          description={item.description}
          tech={item.tech}
          link={item.link}
        />
      ))}
      
    </div>
  );
}

export default Projects