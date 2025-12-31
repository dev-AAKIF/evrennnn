"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatWeDoHeader } from "./AllHeader";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import { KPOSERVICES, RPOSERVICES } from "../lib/utils";
import { serviceDetailsKPO, serviceDetailsRPO } from "../lib/utils2";

const colorMap = {
  purple1: "text-fuchsia-800 bg-purple-200",
  purple2: "text-purple-200 bg-fuchsia-800",
};

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="h-5 w-5 text-black dark:text-white"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState("kpo");
  const [activeCard, setActiveCard] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsRef = useRef([]);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    const container = rightPanelRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const offsetTop = card.offsetTop;
        const offsetHeight = card.offsetHeight;
        const cardMiddle = offsetTop + offsetHeight / 2;
        if (cardMiddle >= scrollTop && cardMiddle <= scrollTop + containerHeight) {
          setActiveCard(index);
        }
      });
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  const kpoContent = {
    title: "KPO Services",
    subtitle: "Knowledge Process Outsourcing",
    description:
      "Leverage our expertise in data management, research, and analytics. Our KPO services are designed to help you make informed decisions, optimize operations, and drive business growth through intelligent data solutions.",
    features: [
      "Data Management & Analytics",
      "Market Research & Insights",
      "Lead Generation & Qualification",
      "Database Building & Maintenance",
    ],
  };

  const rpoContent = {
    title: "RPO Services",
    subtitle: "Recruitment Process Outsourcing",
    description:
      "Transform your hiring process with our comprehensive recruitment solutions. From talent sourcing to executive search, we provide end-to-end recruitment support that helps you build high-performing teams efficiently.",
    features: [
      "Talent Sourcing & Mapping",
      "Executive Search Support",
      "Recruitment Process Management",
      "Talent Insights & Analytics",
    ],
  };

  const activeContent = activeTab === "kpo" ? kpoContent : rpoContent;
  const activeServices = activeTab === "kpo" ? KPOSERVICES.slice(0, 5) : RPOSERVICES.slice(0, 5);

  return (
    <div className="container relative mx-auto px-4 pb-16 overflow-x-hidden">
      <div className="w-full text-center">
        <WhatWeDoHeader />
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md py-6 mb-12">
        <div className="flex justify-center">
          <div className="relative bg-white shadow-md p-1.5 rounded-full inline-flex border border-gray-200">
            <div
              className="absolute top-1.5 h-[calc(100%-12px)] bg-fuchsia-900 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{
                width: "calc(50% - 6px)",
                left: activeTab === "kpo" ? "6px" : "calc(50% + 0px)",
              }}
            ></div>

            <button
              onClick={() => { setActiveTab("kpo"); setActiveCard(0); }}
              className={`relative z-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300 min-w-[150px] ${
                activeTab === "kpo" ? "text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              KPO Services
            </button>
            <button
              onClick={() => { setActiveTab("rpo"); setActiveCard(0); }}
              className={`relative z-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300 min-w-[150px] ${
                activeTab === "rpo" ? "text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              RPO Services
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* LEFT FIXED PANEL */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="space-y-6 p-8 rounded-3xl bg-purple-100 border border-purple-100 min-h-[600px] flex flex-col justify-center shadow-[0_4px_20px_rgba(147,51,234,0.15)]">
            <span className="bg-[#260433] w-fit text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              {activeContent.subtitle}
            </span>

            <h2
              className={`text-4xl lg:text-5xl font-bold bg-clip-text text-transparent ${
                activeTab === "kpo"
                  ? "bg-[linear-gradient(to_right,_#093028,_#6CC686)]"
                  : "bg-[linear-gradient(to_right,_#3e4044,_#2d78f1)]"
              }`}
            >
              {activeContent.title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {activeContent.description}
            </p>

            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Key Offerings
              </h3>
              {activeContent.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    activeCard === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-60 -translate-x-2"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-fuchsia-800"></div>
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Expandable Cards */}
        <div
          ref={rightPanelRef}
          className="space-y-6 max-h-[600px] overflow-y-auto pr-2 rounded-2xl scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400"
        >
          {activeServices.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.key}
                ref={(el) => (cardsRef.current[index] = el)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 flex flex-col md:flex-row justify-between items-center bg-white hover:shadow-lg rounded-xl cursor-pointer transition-shadow duration-200 ${
                  activeCard === index ? "scale-[1.02] shadow-2xl" : ""
                }`}
              >
                <div className="flex gap-4 flex-col md:flex-row items-center md:items-start w-full">
                  <div
                    className={`h-16 w-16 rounded-lg flex items-center justify-center ${colorMap[card.color]} flex-shrink-0`}
                  >
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base text-neutral-800 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">{card.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCard(card)}
                  className="px-5 py-2 text-sm rounded-full font-semibold bg-gray-100 hover:bg-fuchsia-800 hover:text-purple-200 text-neutral-700 mt-4 md:mt-0 transition-colors duration-200"
                >
                  View
                </button>
              </motion.div>
            );
          })}

          <div className="flex justify-center pt-8 pb-8">
            <NavLink to={activeTab === "kpo" ? "/kpo-services" : "/rpo-services"}>
              <button className="group relative flex items-center gap-2 py-3 px-6 text-white rounded-full text-sm font-medium overflow-hidden bg-fuchsia-900 hover:shadow-xl transition-all duration-300 hover:scale-105">
                More Services
                <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Expanded Card Modal */}
     <AnimatePresence mode="wait">
  {selectedCard && (
    <div className="fixed inset-0 flex items-center justify-center z-[100] p-3 sm:p-4 bg-black/30 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-[92vw] sm:max-w-md md:max-w-2xl lg:max-w-3xl my-4 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] sm:max-h-[75vh] md:max-h-[70vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 flex items-center justify-center bg-white rounded-full h-7 w-7 sm:h-8 sm:w-8 shadow-lg hover:bg-gray-100 transition-colors z-20"
          onClick={() => setSelectedCard(null)}
        >
          <CloseIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Compact Layout for All Devices */}
        <div className="flex flex-col sm:flex-row overflow-y-auto max-h-[80vh] sm:max-h-[75vh] md:max-h-[70vh]">
          {/* Icon Section - Compact for all sizes */}
          <div
            className={`w-full sm:w-32 md:w-40 flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${
              colorMap[selectedCard.color]
            } py-6 sm:py-8 px-4`}
          >
            <selectedCard.icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
          </div>

          {/* Content Section - Scrollable */}
          <div className="flex-1 p-4 sm:p-5 md:p-6 overflow-y-auto">
            {(() => {
              const serviceDetails =
                activeTab === "kpo" ? serviceDetailsKPO : serviceDetailsRPO;

              return (
                <>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg text-[#260433] mb-2 pr-6">
                    {serviceDetails[selectedCard.key]?.title || selectedCard.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {serviceDetails[selectedCard.key]?.details || selectedCard.description}
                  </p>
                  
                  <ul className="text-neutral-600 text-xs sm:text-sm list-none space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    {serviceDetails[selectedCard.key]?.points?.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-600 text-xs sm:text-sm flex-shrink-0">✔</span>
                        <span className="leading-snug">{p.content}</span>
                      </li>
                    ))}
                  </ul>
                </>
              );
            })()}

            <button
              className="w-full sm:w-auto bg-[#260433] hover:bg-fuchsia-950 px-5 sm:px-6 py-2 text-xs sm:text-sm font-medium text-white rounded-full transition-colors"
              onClick={() => {
                // Contact action
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
    </div>
  );
}
