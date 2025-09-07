import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <div className="relative min-h-screen">
        <BackgroundLines className="bg-black flex items-center justify-center w-full flex-col px-4 min-h-screen">
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 pb-10">
            <h2 className="bg-clip-text text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Hey I&apos;m Karan <br />
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white sm:bg-clip-text sm:text-transparent text-center sm:bg-gradient-to-b sm:from-neutral-800 sm:to-neutral-700 sm:dark:from-neutral-600 sm:dark:to-white font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Breathing Life into Lines of Code
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-white md:text-lg md:text-neutral-700 md:dark:text-neutral-400 text-sm text-center px-4">
            I build websites and web apps with a perfect blend of clean code and stunning visuals.
            </p>
    
            <div className="flex gap-5 relative z-20 ">
            <a
              href="https://www.linkedin.com/in/karan-bodkhe-57824524a/"
              className="cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/karanb757"
              className="cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <div className="relative group inline-flex items-center">
            <a
              href="mailto:karanbodkhe757@gmail.com"
              className="cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg text-white leading-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-800 text-white text-[10px] sm:text-xs rounded px-2 py-1 whitespace-nowrap">
                karanbodkhe757@gmail.com | +91-6232072419
              </span>
            </div>
            <a
              href="/KaranResume.pdf"
              className="cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
};

export default Hero;
