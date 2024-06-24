import React from "react";
import { UserInputProvider } from "./context";

const ContextWrapper = ({ children }) => {
  return <UserInputProvider>{children}</UserInputProvider>;
};

export default ContextWrapper;