import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="relative min-h-screen">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 pb-10">
            <h2 className="bg-clip-text text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Code by Logic Design by Passion <br/>
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-6xl bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Breathing Life into Lines of Code
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center px-4">
              I build websites and web apps with a perfect blend of clean code and stunning visuals.
            </p>
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
};

export default Hero;