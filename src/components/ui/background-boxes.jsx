"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const BoxesCore = ({ className, ...rest }) => {
  // Optimized grid size with larger boxes to maintain coverage
  const rows = new Array(80).fill(1); // balanced reduction
  const cols = new Array(60).fill(1); // balanced reduction
  
  const colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Memoize the grid to prevent re-renders
  const grid = useMemo(() => {
    return rows.map((_, i) => (
      <motion.div
        key={`row-${i}`}
        className="relative h-12 w-20 border-l border-slate-700"
      >
        {cols.map((_, j) => (
          <motion.div
            key={`col-${j}`}
            whileHover={{
              backgroundColor: getRandomColor(),
              transition: { duration: 0 },
            }}
            animate={{
              transition: { duration: 2 },
            }}
            className="relative h-12 w-20 border-t border-r border-slate-700"
          >
            {j % 2 === 0 && i % 2 === 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </motion.div>
        ))}
      </motion.div>
    ));
  }, []); // Empty deps means compute only once

  return (
    <div
      style={{
        transform:
          "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(1.2) rotate(0deg) translateZ(0)",
        willChange: "transform",
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}
    >
      {grid}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);