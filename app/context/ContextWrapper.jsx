import React from "react";
import { UserInputProvider } from "../../app/context/Context";
 
const ContextWrapper = ({ children }) => {
  return <UserInputProvider>{children}</UserInputProvider>;
};

export default ContextWrapper;