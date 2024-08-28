"use client";

import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { motion } from "framer-motion";
import { UserInputContext } from "../../app/context/Context";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useContext } from "react";
import Social from "../../components/Social";

const Contact = () => {
  const { userInput } = useContext(UserInputContext);
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: userInput.phone || "+880 1990-933196",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: userInput.email || "official.arnabdev@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description:
        userInput.address ||
        "Concord Regency, Apt-9/C, House No.19/1, West Panthapath, Kalabagan, Dhaka-1205, Bangladesh",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="w-full sm:px-10 px-2 md:mt-[180px] flex flex-col  sm:gap-[30px] gap-[20px]">
        {/* <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10  bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-[#cbacf9]">Lets work together!</h3>
              <p className="text-white/60"></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div> */}

        <div className="w-full mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-center sm:gap-6 gap-2"
                >
                  <div className="w-[40px] h-[40px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#cbacf9] rounded-md flex items-center justify-center">
                    <div className="xl:text-[28px] text-[20px] ">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-white sm:text-xl text-md">
                      {item.description}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full mb-8 xl:mb-0 justify-center items-start">
          <Social
            containerStyles="flex gap-6"
            iconStyles="md:w-12 md:h-12 w-10 h-10 hover:scale-125 border border-[#cbacf9] rounded-full flex justify-center items-center text-[#cbacf9] text-base hover:bg-[#cbacf9] hover:text-primary transition-all duration-200"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
