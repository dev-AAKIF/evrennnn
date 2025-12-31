import React from "react";
import {
  Factory,
  Car,
  Building2,
  FlaskRound,
  Code,
  ShoppingCart,
} from "lucide-react";

const industries = [
  {
    icon: Code,
    name: "IT & Development",
    description: "Tailored IT and Software Solutions for a Smarter Future",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Smart manufacturing and Industry 4.0 solutions",
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Next-generation automotive technologies",
  },
  {
    icon: ShoppingCart,
    name: "FMCG",
    description:
      "Driving Growth with Agile Solutions for the Fast-Moving Consumer Goods Industry",
  },
  {
    icon: Building2,
    name: "Banking",
    description: "Innovative financial technology solutions",
  },
  {
    icon: FlaskRound,
    name: "Pharmaceutical",
    description: "Cutting-edge healthcare solutions",
  },
];

export default function IndustryFocused() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#260433] via-[#2d0641] to-[#3b0755] py-24 overflow-hidden">
      {/* Subtle glowing gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm uppercase tracking-wider text-fuchsia-400 font-semibold mb-4">
          Our Expertise
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-16 relative inline-block">
          Industries Focused
          <span className="block w-20 h-1 bg-fuchsia-500/60 mx-auto mt-3 rounded-full"></span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="group relative bg-gradient-to-br from-[#2d0641] to-[#1b012a] hover:from-fuchsia-900/40 hover:to-purple-800/40 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_rgba(217,70,239,0.3)]"
            >
              {/* Icon with Glow */}
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20 transition">
                <Icon
                  className="w-8 h-8 text-fuchsia-400 group-hover:text-white transition-transform duration-500 transform group-hover:scale-110"
                  strokeWidth={1.8}
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                {name}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">
                {description}
              </p>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-fuchsia-500/30 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
