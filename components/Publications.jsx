"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Variability Aware Fuzzing",
    authors: "Meah Tahmeed Ahmed, Arnab Dev, Shiyi Wei",
    conference: "International Conference on Software Engineering (ICSE), 2026",
    status: "Accepted",
    link: "/vafuzz.pdf",
  },
  // Add more publications here
];

const Publications = memo(() => {
  return (
    <section className="w-full py-12 xl:py-20">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-12">
          Research <span className="text-[#cbacf9]">&</span> Publications
        </h2>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              className="bg-[#27272c] border border-[#cbacf9]/20 rounded-xl p-6 hover:border-[#cbacf9]/50 transition-all duration-300 group"
            >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              publication.status === "Accepted"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : publication.status === "Published"
                                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            }`}
                          >
                            {publication.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#cbacf9] transition-colors duration-300 mb-2">
                          {publication.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[#cbacf9] font-medium mb-2">
                      {publication.authors}
                    </p>

                    <p className="text-white/60 text-sm">
                      {publication.conference}
                    </p>
                  </div>

                  {publication.link && publication.link !== "#" && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#cbacf9]/10 hover:bg-[#cbacf9]/20 border border-[#cbacf9]/30 rounded-lg text-[#cbacf9] transition-all duration-300 group-hover:scale-105"
                    >
                      <span className="text-sm font-medium">View Paper</span>
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
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
});

Publications.displayName = 'Publications';

export default Publications;
