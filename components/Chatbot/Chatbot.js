"use client";
import { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCircle } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi";
import { PiPaperPlaneRightLight } from "react-icons/pi";
// import gptLogo from "./wappGPTlogo.png";
import recGray from "./RectangleGray.png";
import recGreen from "./RectangleGreen.png";
import Image from "next/image";

import icon1 from "./icons/1.png";
import icon2 from "./icons/2.png";
import icon3 from "./icons/3.png";
import icon4 from "./icons/4.png";
// import help from "./icons/help.png";

const predefinedQuestions = [
  {
    question: "How are you arnab?",
    answer:
      "Great! What about you!",
    link: "#",
  },
  {
    question: "Where do you live?",
    answer: "I currently live in Dhaka, Bangladesh?",
    // link: "#",
  },
  {
    question: "How old are you?",
    answer: "I am 19 years old",
    // link: "#",
  },
];

const Chatbot = () => {
  const [selectedQuestion, setSelectedQuestion] = useState([]);
  const [show, setShow] = useState(false);
  const [qesSug, setQesSug] = useState(predefinedQuestions);
  const divRef = useRef(null);

  const [iconSrc, setIconSrc] = useState(icon1);
  const images = [icon1, icon2, icon3, icon4];

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate through images
      setIconSrc((prevSrc) => {
        const currentIndex = images.indexOf(prevSrc);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeSugQes = (item) => {
    let newQesSug = qesSug.filter((qes) => qes != item);
    setQesSug(newQesSug);
  };

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTo({
        top: divRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed z-20 bottom-4 right-4">
      {!show ? (
        <div>
          <Image
            src={iconSrc}
            alt="icon"
            width={64}
            height={64}
            quality={100}
            className="w-auto h-auto cursor-pointer float-right"
            onClick={() => {
              setShow(true);
              setTimeout(() => {
                scrollToBottom();
              }, 100);
            }}
          />
        </div>
      ) : (
        <div className={`max-w-sm mx-auto bg-white dark:bg-black shadow-lg rounded-3xl mb-5 ml-4`}>
          <div className="flex justify-between rounded-t-3xl bg-secondary p-5">
            <div className="flex items-center gap-4">
              <Image
                src="/arnab.png"
                alt="GPT logo"
                width={40}
                height={40}
                quality={100}
                className="h-auto w-auto"
              />
              <div>
                <p className="font-bold text-white">Arnab Dev</p>
                <div className="flex items-center text-[#43EE7D]">
                  <FaCircle className="mr-1" />{" "}
                  <span className="text-sm">Online</span>
                </div>
              </div>
            </div>
            <RxCross2
              className="text-2xl text-white cursor-pointer"
              onClick={() => setShow(false)}
            />
          </div>

          <div
            className="bg-gray-50 dark:bg-black p-6  mb-5 flex flex-col justify-between min-h-80 max-h-96 overflow-y-auto"
            style={{ shadow: "" }}
            ref={divRef}
          >
            {selectedQuestion.map((item, i) => (
              <div key={i} className="flex flex-col">
                {/* Questions  */}
                <p className="ml-auto bg-[#dee2e6] text-black  py-3 px-4 rounded-t-lg rounded-s-lg z-10 w-fit text-right max-w-72">
                  {item?.question}
                </p>
                <div className="flex justify-between mb-4 ml-auto">
                  <p className="text-xs mt-1 flex items-center dark:text-white text-gray-500">
                    7:20{" "}
                    <span>
                      <BiCheckDouble className="text-lg ml-1 text-[#7B2CBF] dark:text-secondary" />
                    </span>
                  </p>
                  <div className="-mt-1">
                    <Image src={recGray} alt="corner" width={20} height={20} />
                  </div>
                </div>

                {/* Answer  */}
                <p className="text-left bg-[#08594a] text-white py-3 px-4 rounded-t-lg rounded-e-lg z-10 w-fit max-w-72">
                  {item?.answer ? item.answer : "Answer not found"}
                </p>
                <div className="flex mb-4">
                  <div className="-mt-1">
                    <Image src={recGreen} alt="corner" width={20} height={20} />
                  </div>
                  <p className="text-xs mt-1 dark:text-white text-gray-500 ml-2">7:20</p>
                </div>
              </div>
            ))}
          </div>

          {/* Questions Suggetions  */}
          <div className="mb-4 mx-6 bg-white dark:bg-black">
            {qesSug.slice(0, 3).map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedQuestion((prev) => [...prev, item]);
                  removeSugQes(item);
                  setTimeout(() => {
                    scrollToBottom();
                  }, 100);
                  // scrollToBottom();
                }}
                className="bg-gray-200 text-black px-3 py-1 rounded-full mr-2 mb-2"
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Input field */}
          <div className="relative mx-6 pb-4">
            <input
              type="text"
              className="text-black w-full border rounded-3xl pl-4 pr-10 py-4 focus:outline-none focus:ring focus:border-blue-300 bg-gray-100"
              placeholder="Type your message here..."
            />
            <PiPaperPlaneRightLight className="text-xl absolute right-4 top-5 text-[#12957D] hover:text-black cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;