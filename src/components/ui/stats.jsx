import React, { useEffect, useState } from "react";
import { FileCheck, Search, User, UsersRound } from "lucide-react";
import { motion } from "framer-motion";

// Improved useCountUp hook (cancels RAF on cleanup)
const useCountUp = (endValue, duration, startValue = 0) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    let rafId;
    if (endValue === startValue) {
      setCount(startValue);
      return;
    }

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = Math.floor(progress * (endValue - startValue) + startValue);
      setCount(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [endValue, duration, startValue]);

  return count;
};

const formatValue = (value, prefix = "") => {
  return `${value.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  })} ${prefix}`;
};

// InlineCounter: placed inside each card to animate the displayed number when visible
const InlineCounter = ({ endValue, prefix = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only once per load; remove if you want repeat
        }
      },
      { threshold: 0.25 } // trigger when ~25% of the card is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      try {
        if (ref.current) observer.unobserve(ref.current);
      } catch (e) {
        // ignore if already disconnected
      }
    };
  }, []);

  const count = useCountUp(isVisible ? endValue : 0, 2000, 0);

  return (
    <span
      ref={ref}
      className={`text-5xl font-bold text-slate-800 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {formatValue(count, prefix)}
    </span>
  );
};

// LayoutGrid Component (cleaned - no modal logic)
const LayoutGrid = ({ cards }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
          <motion.div
            className="bg-purple-200 backdrop-blur-xl rounded-2xl h-full w-full border border-white/20 hover:shadow-lg transition-shadow"
            layoutId={`card-${card.id}`}
          >
            <CardContent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const CardContent = ({ card }) => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/[0.02] to-slate-900/[0.08] opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-6 h-full flex flex-col justify-center">
        <div className="flex flex-col items-start gap-5">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-slate-800/20 blur opacity-100"></div>
            <div className="relative bg-white/80 p-3 rounded-xl">
              {card.icon}
            </div>
          </div>
          <div className="space-y-1">
            {/* Replaced static card.value with animated InlineCounter */}
            <InlineCounter endValue={card.endValue} prefix={card.prefix} />
            <h3 className="text-sm font-medium text-[#260433] uppercase tracking-wider">
              {card.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// (Optional larger StatCard removed — animation happens inline now)

function Stats() {
  const cards = [
    {
      id: 1,
      title: "Delighted Partners",
      // numeric target used by InlineCounter
      endValue: 300,
      prefix: "+",
      icon: <User className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      id: 2,
      title: "Team Members",
      endValue: 50,
      prefix: "+",
      icon: <UsersRound className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      title: "Excellence Recognition",
      endValue: 100,
      prefix: "+",
      icon: <Search className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "Deliver Result",
      endValue: 10,
      prefix: "M",
      icon: <FileCheck className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-100 via-white to-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-10 w-1 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
            <div>
              <h2 className="text-3xl font-bold text-[#13011A] tracking-tight">
                Enterprise Metrics
              </h2>
            </div>
            <div className="ml-14 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="h-px w-8 bg-gradient-to-r from-slate-200 to-transparent"></div>
                <p className="text-sm text-purple-800 font-medium">
                  Real-time performance analytics
                </p>
              </div>
            </div>
          </div>

          <LayoutGrid cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
