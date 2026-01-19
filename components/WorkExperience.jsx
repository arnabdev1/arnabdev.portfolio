"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const experience = [
  {
    img: "/utd.png",
    company: "University of Texas at Dallas",
    position: "Undergraduate Research Assistant",
    content:
      `• Engineered VAFuzz, a high-performance fuzzer(4000 executions/second) extended from AFL++. Implementing C/C++ configuration and input co-execution algorithm for presence-condition seed queues and variability-aware mutations. Achieved superior code coverage on 84% of benchmark programs.
       • Extending the Google FuzzBench framework to support compile-time configurability, utilizing Docker containers to orchestrate scalable variability-aware fuzzing experiments.
       • Developed complex Bash and Python automation scripts to manage the build, execution, and data extraction of large-scale fuzzing campaigns.`,
    timeline: "1 October 2024 - Present",
  },
  {
    img: "/bondstein.jpeg",
    company: "Bondstein Technologies",
    position: "Software Engineer Intern",
    content:
      `• Developed scalable, responsive web interfaces using Next.js and Tailwind CSS, integrating with Node.js backends to deliver seamless user experiences.
• Optimized rendering paths by implementing memoization strategies (React.memo, useMemo) and code-splitting, resulting in a 40% reduction in component re-renders and a 1.5s decrease in Time to Interactive (TTI).
• Refactored legacy API consumption patterns to use efficient data fetching hooks, reducing redundant network requests by 25% and improving application state stability.
• Automated deployment workflows via GitHub Actions CI/CD pipelines, reducing build times by 30%`,
    timeline: "1 June 2024 - 2 August 2024",
  },
  {
    img: "/edification.png",
    company: "Edification",
    position: "CS Teaching Assistant",
    content:
      `• Taught python fundamentals to students of class 9 to class 11. 
• Assisted senior computer science teacher to teach his courses of GCSE O level Computer Science(2210)`,
    timeline: "1 October 2022 - 1 December 2023",
  },
  {
    img: "/nifw.png",
    company: "Next Initiative Foundation",
    position: "President, Web Developer",
    content:
      `• Recruited and led 300+ volunteers, chief organiser at multiple fund raising youth events of 4000+ participants. 
• Our work has been featured in national TV channels like Atn Bangla and Ek Takar Khobor. Built portfolio website using React.`,
    timeline: "1 August 2020 - Present",
  },
  {
    img: "/essstem.jpeg",
    company: "ESS STEM Club",
    position: "President",
    content:
      `• Leader during growth from 50 members to 200+ members, making it the school’s largest academic club. 
• Chief organiser of intra-school events(Science fair, Science film festival, Science and Math Olympiad) and academic sessions. 
• Prepared question sets on Mathematics, Physics, Chemistry, ICT, Programming, and Astrophysics for olympiads.`,
    timeline: "1 October 2021 - 1 January 2024",
  },
];

const WorkExperience = memo(() => {
  return (
    <section className="w-full py-12 xl:py-20">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-12">
          Work <span className="text-[#cbacf9]">Experience</span>
        </h2>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              className="bg-[#27272c] border border-[#cbacf9]/20 rounded-xl p-6 hover:border-[#cbacf9]/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 border-[#cbacf9]/30 group-hover:border-[#cbacf9]/60 transition-all duration-300">
                    <Image
                      src={item.img}
                      alt={item.company}
                      fill
                      sizes="(max-width: 768px) 96px, 112px"
                      className="object-contain p-2 bg-white/5"
                    />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#cbacf9] transition-colors duration-300">
                          {item.company}
                        </h3>
                        <p className="text-[#cbacf9] font-semibold mt-1">
                          {item.position}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
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
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="whitespace-nowrap">{item.timeline}</span>
                      </div>
                    </div>

                    <div className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                      {item.content}
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

WorkExperience.displayName = 'WorkExperience';

export default WorkExperience;
