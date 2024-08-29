"use client"
import React from 'react'

const Projects = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className=" mt-20">Section Under Construction</div>
      <div className="">For now check my resume for the projects:</div>
      <button
        className="bg-secondary rounded-full p-2 mt-2"
        onClick={() => (window.location.href = "/cv.pdf")}
      >
        Resume
      </button>
    </div>
  );
}

export default Projects