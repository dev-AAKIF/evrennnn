import React from "react";
import { Vortex } from "../components/ui/vortex";
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <Vortex 
      className="flex items-center min-h-screen lg:pt-20 sm:pt-24 justify-center w-full flex-col px-4 overflow-hidden" 
    >
      <h2
        className="bg-clip-text text-white text-center text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-2 p-1 relative z-20 font-bold tracking-tight">
        The Premier Hub <br /> For Cutting-Edge Research.  
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-white text-center">
        We turn ideas into actionable insights, empowering businesses with innovative research solutions. With precision, creativity, and expertise, we drive discovery and deliver success.
      </p>
    </Vortex>
  );
}