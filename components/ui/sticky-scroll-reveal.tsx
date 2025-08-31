"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000000", // black
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col lg:flex-row justify-center rounded-md"
      ref={ref}
    >
      {/* Content Section */}
      <div className="relative flex items-start pr-0 sm:px-4 w-full lg:w-1/2">
        <div className="max-w-full lg:max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-0">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-md sm:text-base md:text-lg lg:text-base mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-sm text-[#494949] leading-relaxed pb-2 mb-12"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Image/Content Section */}
      <div
        className={cn(
          "flex items-center justify-center hidden lg:block sticky top-1/2 -translate-y-1/2 h-[22vh] w-[250px] overflow-hidden rounded-md mt-8 lg:mt-0",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};