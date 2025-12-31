import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OurTeamSection() {
  const aboutCards = [
    {
      name: "Aslan Shaikh",
      role: "Founder and Head of Business Development",
      number: "+91 99678-10464",
      linkedin: "https://www.linkedin.com/in/aslan-shaikh-179925230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "purple",
      image: "https://via.placeholder.com/100", // replace with real photo
    },
  ];

  const cardThemes = {
    purple: "border-fuchsia-500 hover:shadow-fuchsia-300/40",
    blue: "border-blue-400 hover:shadow-blue-300/40",
    green: "border-emerald-400 hover:shadow-emerald-300/40",
    pink: "border-pink-400 hover:shadow-pink-300/40",
  };

  return (
    <section className="relative px-6 py-16 lg:px-20 bg-gradient-to-br from-fuchsia-50 via-white to-purple-50 overflow-hidden">
      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-lg md:text-xl tracking-wider font-semibold text-fuchsia-700 uppercase border-b-2 border-fuchsia-600 pb-1">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#260433] mt-4">
            Meet Our <span className="text-fuchsia-700">Experts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Our team at Evren Research is a diverse group of professionals united
            by a passion for innovation, precision, and growth.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Left Text Block */}
          <motion.div
            className="w-full lg:w-1/2 space-y-5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#260433]">
              Driven by Talent, Passion, and Purpose
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              At Evren Research, every member plays a key role in transforming
              data into impactful insights. Our leadership and experts work
              together to deliver excellence and innovation globally.
            </p>

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#260433] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-fuchsia-900 transition"
            >
              Know More
              <ChevronRight className="h-5 w-5" />
            </NavLink>
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-wrap justify-center gap-8 w-full lg:w-1/2">
            {aboutCards.map((card, i) => (
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={i}
                className={`relative flex flex-col items-center text-center bg-white rounded-2xl border-2 ${cardThemes[card.color]} transition-all duration-300 p-6 w-72`}
              >
                {/* <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-200 shadow-sm">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <h3 className="text-lg font-semibold text-[#260433]">
                  {card.name}
                </h3>
                <p className="text-sm text-gray-600">{card.role}</p>
                <div className="flex items-center justify-between gap-4 mt-4 w-full text-sm text-gray-600">
                  <a
                    href={card.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fuchsia-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.73s.79-1.73 1.75-1.73c.97 0 1.75.79 1.75 1.73s-.79 1.73-1.75 1.73zm13.5 11.27h-3v-5.5c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.61h-3v-10h2.88v1.36h.04c.4-.75 1.37-1.54 2.81-1.54 3 0 3.55 1.98 3.55 4.56v5.62z" />
                    </svg>
                  </a>
                  <a href="tel:+919967810464">
                  <span>{card.number}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
