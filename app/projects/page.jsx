"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = memo(() => {
  const data = [
    {
      name: "NeuroSync",
      img: "/neurosync-logo.png",
      description:
        `Engineered a closed-loop Brain-Computer Interface (BCI) using a Muse 2 gateway to stream real-time EEG/PPG data, training a 1D-CNN and LSTM pipeline to predict cognitive fatigue with a 30-minute forecasting window. 
         Architected a Mixture-of-Agents (MoA) intervention system in Node.js and LangGraph via the Featherless.ai API, dynamically routing between 3 LLMs (DeepSeek, Qwen, KimiK2) to autonomously block distracting applications.`,
      tech: "Next.js, Node.js, React, Flask, PyTorch, LangChain, LangGraph, Featherless.ai",
      link: "https://devpost.com/software/undecided-iwednr",
    },
    {
      name: "Sprinklify",
      img: "/sprinklify.png",
      description:
        `Sprinkify is an intelligent irrigation assistant that integrates NLP, computer vision, optimization, ML, and IoT into one seamless platform.
        Users can simply describe their lawn (“7m by 5m lawn with rounded edges…”) and Gemini parses the text into structured GeoJSON, validated by spaCy + regex.
        Or they can upload a photo or drone video, and our Flask CV pipeline (OpenCV + Shapely) segments lawn areas and sprinkler points to auto-generate GeoJSON.
        Once a lawn is defined, our solver + reinforcement learning agent generates per-sprinkler rotation and flow schedules that minimize overspray and water use while maximizing coverage.
        Gemini also powers three LLM “agents” for users.
        We also had real hardware simulation with Arduino-based IoT sprinklers in a physical testbed!`,
      tech: "React, Tailwind CSS, Spring Boot (LLM/NLP/Auth0), Flask (CV/ML/Optimizer), Gemini API, spaCy, regex, PPO RL, OR-Tools, MATLAB, OpenCV, Shapely, MongoDB",
      link: "https://devpost.com/software/undecided-svb23a",
    },
    {
      name: "Variability Aware Fuzzer",
      img: "/vafuzz.png",
      description:
        "Research: A novel variability-aware fuzzer that integrates principled dynamic variability-aware analysis within the fuzzing process to enhance configuration space exploration using new variability-aware seed selection and mutations to drive the fuzzing process.",
      tech: "Docker, C, C++, Python",
      link: "https://arnabdev.netlify.app/vafuzz.pdf",
    },
    {
      name: "FuzzbenchPlusPlus",
      img: "/utd.png",
      description:
        "Research:In this work, we identify critical gaps in current benchmarking infrastructure that prevent fair and systematic comparison of such fuzzers. We extend FuzzBench to support configuration-aware fuzzing.",
      tech: "Docker, C, C++, Python",
      link: "",
    },
    {
      name: "HydraWatch",
      img: "/hydra.png",
      description:
        "An app to visualize gas pipeline data through an interactive dashboard for detection and prediction of hydrate formation using current gas injection metrics with a 95% accurate regression model for real-time predictions.",
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
    // {
    //   name: "Kormi App",
    //   img: "/kormi.png",
    //   description:
    //     "Full stack project where domestic workers can be hired. Used various technologies like Context API, React Router Dom, SCSS, React leaflet, etc",
    //   tech: "MERN Stack(React, Node.js, MongoDB)",
    //   link: "https://kormi.netlify.app/",
    // },
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
      description:
        "Portfolio website for fundraising purposes built for a non profit organization in 2020.",
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
    <section className="w-full py-12 xl:py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="h2 text-center mb-12">
          My <span className="text-[#aeacb1]">Projects</span>
        </h1>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              className="bg-[#27272c] border border-[#cbacf9]/20 rounded-xl p-6 hover:border-[#cbacf9]/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative w-full md:w-48 h-40 md:h-32 rounded-lg overflow-hidden border-2 border-[#cbacf9]/30 group-hover:border-[#cbacf9]/60 transition-all duration-300">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                      className="object-cover"
                    />
                    </div>
                  </div>


                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#cbacf9] transition-colors duration-300">
                          {project.name}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 bg-[#cbacf9]/10 hover:bg-[#cbacf9]/20 border border-[#cbacf9]/30 rounded-lg text-[#cbacf9] transition-all duration-300 w-fit text-sm"
                          >
                            <span className="font-medium">View Project</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                      </div>

                      <p className="text-white/80 text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#cbacf9] text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      <span className="font-semibold">{project.tech}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;