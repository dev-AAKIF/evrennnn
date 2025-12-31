import React from "react";

import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export function KpoServicesHeading() {
  return (
    <div className="relative flex min-h-80vh w-full flex-col overflow-hidden pt-40 mb-10" data-aos="zoom-in" data-aos-duration="1300">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 sm:px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Button */}
         

          {/* Main Heading */}
          <div className="text-center text-[clamp(32px,8vw,44px)] font-bold leading-tight tracking-tight sm:text-[64px]">
            <h1 className="bg-[linear-gradient(to_right,_#093028,_#6CC686)]  bg-clip-text text-transparent">
              Business Intelligence & Research Solutions
            </h1>
          </div>

          {/* Subheading */}
          <p className="max-w-[90%] text-black text-center text-sm font-normal leading-6 text-default-500 sm:max-w-[466px] sm:text-base sm:leading-7">
            Your Trusted Partner In Global Talent Acquisition.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              className="h-10 w-full max-w-[200px] bg-[#260433] hover:bg-fuchsia-950  px-4 py-2 text-sm font-medium sm:w-auto text-white"
              radius="full"
            >
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
            <Button
              className="h-10 w-full max-w-[200px] border border-default-100 px-4 py-2 text-sm font-medium sm:w-auto text-[#260433] hover:bg-gray-200"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100 text-[#260433] ">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              <NavLink to="/about">Know More</NavLink>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
export function RpoServicesHeading() {
  return (
    <div className="relative flex min-h-80vh w-full flex-col overflow-hidden pt-40 mb-10" data-aos="zoom-in" data-aos-duration="1300">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 sm:px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Button */}
         

          {/* Main Heading */}
          <div className="text-center text-[clamp(32px,8vw,44px)] font-bold leading-tight tracking-tight sm:text-[64px]">
            <h1 className="bg-[linear-gradient(to_right,_#3e4044,_#2d78f1)] bg-clip-text text-transparent">
             Talent Acquisition & Recruitment Solutions
            </h1>
          </div>

          {/* Subheading */}
          <p className="max-w-[90%] text-center text-sm font-normal leading-6 text-default-500 sm:max-w-[466px] sm:text-base sm:leading-7 text-black">
            Your Trusted Partner In Global Talent Acquisition.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">

            <Button
              className="h-10 w-full max-w-[200px] bg-[#260433] hover:bg-fuchsia-950  px-4 py-2 text-sm font-medium sm:w-auto text-white"
              radius="full"
            >
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
            <Button
              className="h-10 w-full max-w-[200px] border border-default-100 px-4 py-2 text-sm font-medium sm:w-auto text-[#260433] hover:bg-gray-200"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100 text-[#260433] ">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              <NavLink to="/about">Know More</NavLink>
            </Button>


          </div>
        </section>
      </main>
    </div>
  );
}
export function BpoServicesHeading() {
  return (
    <div className="relative flex min-h-80vh w-full flex-col overflow-hidden pt-40 mb-10" data-aos="zoom-in" data-aos-duration="1300">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 sm:px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Button */}
         

          {/* Main Heading */}
          <div className="text-center text-[clamp(32px,8vw,44px)] font-bold leading-tight tracking-tight sm:text-[64px]">
            <h1 className="bg-[linear-gradient(to_right,_#093028,_#6CC686)]  bg-clip-text text-transparent">
              Customer Support & Process Management
            </h1>
          </div>

          {/* Subheading */}
          <p className="max-w-[90%] text-center text-sm font-normal leading-6 text-default-500 sm:max-w-[466px] sm:text-base sm:leading-7 text-black">
            Your Trusted Partner In Global Talent Acquisition.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">

            <Button
              className="h-10 w-full max-w-[200px] bg-[#260433] hover:bg-fuchsia-950  px-4 py-2 text-sm font-medium sm:w-auto text-white"
              radius="full"
            >
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
            <Button
              className="h-10 w-full max-w-[200px] border border-default-100 px-4 py-2 text-sm font-medium sm:w-auto text-[#260433] hover:bg-gray-200"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100 text-[#260433] ">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              <NavLink to="/about">Know More</NavLink>
            </Button>


          </div>
        </section>
      </main>
    </div>
  );
}
export function CrmServicesHeading() {
  return (
    <div className="relative flex min-h-80vh w-full flex-col overflow-hidden pt-40 mb-10" data-aos="zoom-in" data-aos-duration="1300">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 sm:px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Button */}
         

          {/* Main Heading */}
          <div className="text-center text-[clamp(32px,8vw,44px)] font-bold leading-tight tracking-tight sm:text-[64px]">
            <h1 className="bg-[linear-gradient(to_right,_#3e4044,_#2d78f1)] bg-clip-text text-transparent">
              CRM, Automation & AI Tools Development
            </h1>
          </div>

          {/* Subheading */}
          <p className="max-w-[90%] text-center text-sm font-normal leading-6 text-default-500 sm:max-w-[466px] sm:text-base sm:leading-7 text-black">
            Your Trusted Partner In Global Talent Acquisition.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">

            <Button
              className="h-10 w-full max-w-[200px] bg-[#260433] hover:bg-fuchsia-950  px-4 py-2 text-sm font-medium sm:w-auto text-white"
              radius="full"
            >
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
            <Button
              className="h-10 w-full max-w-[200px] border border-default-100 px-4 py-2 text-sm font-medium sm:w-auto text-[#260433] hover:bg-gray-200"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100 text-[#260433] ">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              <NavLink to="/about">Know More</NavLink>
            </Button>


          </div>
        </section>
      </main>
    </div>
  );
}