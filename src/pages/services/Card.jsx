import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import { SquareArrowOutUpRight } from "lucide-react";

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  detailPath,
  color,
}) => {
  const borderthemes = {
    red: "hover:border-red-600/70 border-red-100",
    orange: "hover:border-orange-600/70 border-orange-100",
    green: "hover:border-green-400/70 border-green-100",
    blue: "hover:border-blue-400/70 border-blue-100",
    pink: "hover:border-pink-600/70 border-pink-100",
    purple: "hover:border-purple-600/70 border-purple-100",
    yellow: "hover:border-yellow-300/70 border-yellow-100",
    emerald: "hover:border-green-600/70 border-emerald-100",
    indigo: "hover:border-indigo-800/70 border-indigo-100",
    maroon: "hover:border-red-900/70 border-red-100",
    cyan: "hover:border-cyan-600/70 border-cyan-100",
  };

  const cardthemes = {
    purple1: "text-fuchsia-800 bg-purple-200",
    purple2: "text-purple-200 bg-fuchsia-800",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link to={detailPath}>
      <div
        className={`group relative flex flex-col justify-between gap-5 rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br from-white via-white to-gray-50 ${borderthemes[color]}`}
      >
        {/* subtle gradient ring glow on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-lg text-[#260433] tracking-wide">
              {title}
            </span>
            <span className="text-sm text-gray-700 leading-6 font-medium">
              {description}
            </span>
          </div>
          <div>
            <button
              className={`p-3 rounded-xl shadow-md transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-105 ${
                cardthemes[color] || "bg-gray-50 text-gray-700"
              }`}
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* 
          <div className="border-t border-gray-200 flex justify-end pt-2">
          <Tooltip
            content="Know More"
            color="foreground"
            className="px-3 py-2 rounded-md text-xs"
            isOpen={isOpen}
            onOpenChange={(open) => setIsOpen(open)}
          >
            <button className="hover:bg-gray-100 p-2 rounded-full text-[#13011A] transition-transform duration-300 hover:scale-110">
              <SquareArrowOutUpRight className="h-5 w-5" />
            </button>
          </Tooltip>
        </div>
         */}
      </div>
    </Link>
  );
};
