import React from "react";
import { User } from "lucide-react";

export const AboutCard = ({ icon: Icon, title, color }) => {
  const cardthemes = {
    pink: "hover:border-pink-400",
    blue: "hover:border-blue-400",
    orange: "hover:border-orange-400",
    red: "hover:border-red-400",
    green: "hover:border-green-400",
    purple: "hover:border-purple-400",
  };
  return (
    <div
      className={`border border-zinc-200 tracking-wide rounded-xl p-5 cursor-pointer bg-white ${cardthemes[color]}`}
    >
      <div className="flex items-center justify-center h-12 w-12 bg-purple-200 rounded-full">
        <Icon className="h-6 w-6 text-fuchsia-800" />
      </div>{" "}
      <div className="text-gray-700 text-sm md:text-base mt-4 font-semibold">
        {" "}
        {title}{" "}
      </div>{" "}
    </div>
  );
};

export const TestimonialCard = ({ quote, name, isActive }) => (
  <div
    className={`bg-white flex h-full sm:gap-6 justify-between flex-col w-[348px] sm:w-[518px] lg:w-[674px] mx-5 lg:mx-6 gap-2 pr-10 pt-10 pb-6 pl-10 sm:pb-10 sm:pl-12 lg:pl-14 rounded-2xl relative border border-zinc-200 ${
      !isActive ? "opacity-50" : ""
    }`}
  >
    <p className="leading-snug text-zinc-700"> {quote} & rdquo; </p>{" "}
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-start sm:items-center justify-between w-full">
      <div className="flex flex-row gap-3 items-center">
        <div className="flex w-full rounded-lg overflow-hidden">
          <button className="p-1.5 rounded-full bg-slate-200">
            <User className="h-5 w-5" />
          </button>{" "}
        </div>{" "}
        <div className="font-semibold capitalize">
          <p className="text-zinc-700"> {name} </p>{" "}
        </div>{" "}
      </div>{" "}
      <a
        href="#"
        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-3 py-1 rounded-2xl w-full sm:w-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <button className="w-full sm:w-auto">
                Know More
                </button> */}{" "}
      </a>{" "}
    </div>{" "}
    <span className="left-3 lg:left-6 top-8 absolute">
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.88 10.61V19.36H0.13V9.98L4.68 0.249998H9.16L5.1 10.61H8.88ZM21.2 10.61V19.36H12.45V9.98L17 0.249998H21.48L17.42 10.61H21.2Z"
          fill="#E4E4E7"
        />
      </svg>{" "}
    </span>{" "}
  </div>
);
