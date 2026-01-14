"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "Java",
  "SQL (MySQL, PostgreSQL)",
  "NoSQL (MongoDB)",
  "Bash",
  "HTML",
  "CSS (Tailwind, SCSS, Bootstrap)",
  "React",
  "Next.js",
  "Node.js",
  "Flask",
  "Spring Boot",
  "Spring AI",
  "pandas",
  "NumPy",
  "Matplotlib",
  "Vercel",
  "Scikit-learn",
  "Azure",
  "Git",
  "Docker",
  "Postman",
  "Figma",
  "Visual Studio",
  "PyCharm",
  "IntelliJ",
];

const Skills = memo(() => {
  return (
    <section className="w-full py-12 xl:py-16">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-center mb-12">
          Skills & <span className="text-[#cbacf9]">Technologies</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                className="bg-gradient-to-br from-[#27272c] to-[#1a1a1f] border border-[#cbacf9]/30 rounded-full px-5 py-2.5 hover:border-[#cbacf9] hover:shadow-lg hover:shadow-[#cbacf9]/20 transition-all duration-300 cursor-default group"
              >
                <span className="text-white text-sm font-medium group-hover:text-[#cbacf9] transition-colors duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
