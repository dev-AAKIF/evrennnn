// import smallScreen from "../image/smallscreen.png";
import React from "react";

export const WhatWeDoHeader = () => {
  return (
    <div className="py-5 mt-5">
      <span className="text-2xl md:text-7xl font-bold text-[#260433] ">What We Do?</span>
    </div>
  );
};

export const AboutUsHeader = () => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {/* <img src={smallScreen} width={30} alt="Evren research" /> */}
      <span className="text-xl md:text-2xl text-warning-500 font-semibold">
        |
      </span>
      <span className="text-2xl md:3xl font-semibold">About Us</span>
    </div>
  );
};

export const WhyChooseHeader = () => {
  return (
    <div className="mb-16">
      <h3 className="text-center text-3xl md:text-5xl font-semibold text-[#260433] leading-tight">
        Why Choose us
      </h3>
    </div>
  );
};
