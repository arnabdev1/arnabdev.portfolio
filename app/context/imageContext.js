"use client";
import React, { createContext, useState, useEffect } from "react";
export const ImageContext = createContext();
export const ImageProvider = ({ children }) => {
  const [imageData, setImageData] = useState({ image: "" });
  useEffect(() => {
    const storedImageData = JSON.parse(localStorage.getItem("imageData"));
    if (storedImageData) {
      setImageData(storedImageData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("imageData", JSON.stringify(imageData));
  }, [imageData]);

  return (
    <ImageContext.Provider value={{ imageData, setImageData }}>
      {children}
    </ImageContext.Provider>
  );
};