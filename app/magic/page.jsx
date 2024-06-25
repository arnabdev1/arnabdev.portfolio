"use client";
import React, { useContext, useState } from "react";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { motion } from "framer-motion";
import { UserInputContext } from "../../app/context/Context";
import { ImageContext } from "../../app/context/imageContext";


const Magic = () => {

  const { setUserInput } = useContext(UserInputContext);
  const { imageData, setImageData } = useContext(ImageContext);
  const [image, setImage] = useState(imageData.image);
  const [inputFirstName, setFirstName] = useState("");
  const [inputLastName, setLastName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputPhone, setPhone] = useState("");
  const [inputAddress,setAddress] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  const handleClick = (event) => {
    alert("Go to home page!")
    event.preventDefault();
    setImageData({ image });
    setUserInput({
      firstName: inputFirstName,
      lastName: inputLastName,
      email: inputEmail,
      phone: inputPhone , 
      address: inputAddress });
    localStorage.setItem("firstName", inputFirstName);
    localStorage.setItem("lastName", inputLastName);
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("phone", inputPhone);
    localStorage.setItem("address", inputAddress);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] justify-center items-center">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              // onSubmit={}
                      className="flex flex-col gap-6 p-10  bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-[#cbacf9]">See the magic!</h3>
              <p className="text-white/60"></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  value={inputFirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <Input
                  type="text"
                  value={inputLastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
                <Input
                  type="text"
                  value={inputEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <Input
                  type="text"
                  value={inputPhone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ready?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Ready?</SelectLabel> */}
                    <SelectItem value="est">Yes</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                className="h-[200px] justify-start items-start"
                placeholder="Address"
                type="text"
                value={inputAddress}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="flex flex-col gap-1">
                <p className="text-white/60">Profile Photo:</p>
                <Input
                  // value={image}
                  // placeholder="Upload Image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="input max-w-100 bg-[#cbacf9] rounded-md text-black py-2"
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  onClick={handleClick}
                  src="/"
                  size="md"
                  className="transition-all duration-300 p-5 rounded-full text-lg border-white border-2 hover:border-0 font-light text-white bg-transparent hover:text-xl hover:bg-[#cbacf9] hover:text-black active:bg-[#cbacf9] focus:outline-none focus:text-white active:text-black focus:ring focus:ring-[#ffffff]"
                  id="submitButton"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#cbacf9] rounded-md flex items-center justify-center">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-white text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Magic;
