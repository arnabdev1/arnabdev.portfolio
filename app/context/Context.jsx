"use client"; // Add this line at the top

import React, { createContext, useState } from "react";

export const UserInputContext = createContext();

export const UserInputProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", 
    address: "",
  });

  return (
    <UserInputContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </UserInputContext.Provider>
  );
};
