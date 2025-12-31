import React from 'react';
import { WhyChooseHeader } from './AllHeader';
import { Cog, LifeBuoy, Puzzle, Rocket, Trophy, Wallet } from 'lucide-react';

// Card data array with Heroicons + glow & gradient info
const cardData = [
  {
    icon: Wallet,
    title: "Prioritize Budget",
    description: "We provide high-quality services that fit your budget, offering scalable solutions without compromising on excellence.",
    glowColor: "#f472b6",
    gradient: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    icon: Puzzle,
    title: "Expertise Across Industries",
    description: "We specialize in talent mapping, executive search, KPO services, and more, offering tailored solutions for diverse industries.",
    glowColor: "#7c3aed",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Innovative Solutions",
    description: "We leverage cutting-edge technologies and data-driven insights to deliver smarter, more efficient results.",
    glowColor: "#2563eb",
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    icon: Trophy,
    title: "Commitment to Quality",
    description: "We ensure high-quality service, from sourcing top talent to providing reliable data management and administrative support.",
    glowColor: "#f59e0b",
    gradient: "from-yellow-500 via-orange-500 to-red-500"
  },
  {
    icon: Cog,
    title: "Customized Approach",
    description: "Our solutions are personalized to meet your unique business needs, driving optimal performance and growth.",
    glowColor: "#10b981",
    gradient: "from-green-500 via-teal-500 to-cyan-500"
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    description: "We offer continuous support, ensuring seamless execution and a collaborative partnership at every stage.",
    glowColor: "#ec4899",
    gradient: "from-pink-500 via-rose-500 to-fuchsia-500"
  }
];

// New ValueCard using hover glow + bottom gradient accent
const ValueCard = ({ icon: Icon, title, description, glowColor, gradient }) => {
  return (
    <div className="group relative" style={{ animationDelay: "0ms" }}>
      <div className="relative bg-[#260433] backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 
      hover:bg-fuchsia-900 hover:border-white/30 hover:scale-105 hover:-translate-y-2">

        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{ boxShadow: `0 0 50px ${glowColor}` }}
        ></div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="inline-flex p-4 rounded-xl bg-purple-200 mb-6 shadow-lg group-hover:shadow-2xl transition-shadow">
            <Icon className="w-8 h-8 text-fuchsia-900" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/80 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className='mt-10 mb-20'>
      <WhyChooseHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10" data-aos="fade-right" data-aos-duration="1300">
        {cardData.map((card, index) => (
          <ValueCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            glowColor={card.glowColor}
            gradient={card.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
