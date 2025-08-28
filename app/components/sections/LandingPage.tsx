"use client";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";

const LandingPage = ({
  greetings = [
    "Hallå", // Swedish
    "Bonjour", // French
    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ", // Punjabi
    "Hola", // Spanish
    "Olá", // Portuguese
    "नमस्ते", // Hindi
  ],
  intervalDuration = 500,
  finalContent = <HomePage />,
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showFinalContent, setShowFinalContent] = useState(false);

  useEffect(() => {
    // Start with the first greeting immediately
    if (currentIndex === -1) {
      setCurrentIndex(0);
      return;
    }

    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, intervalDuration);

      return () => clearTimeout(timer);
    } else {
      // Animation complete, show final content
      const finalTimer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          setShowFinalContent(true);
        }, 800);
      }, 500);

      return () => clearTimeout(finalTimer);
    }
  }, [currentIndex, greetings.length, intervalDuration]);

  return (
    <div className="relative">
      {/* Home page (always rendered behind) */}
      <div>{finalContent}</div>

      {/* Animated overlay */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-transform duration-700 ease-out ${
          !isAnimating && !showFinalContent
            ? "transform translate-y-0"
            : showFinalContent
            ? "transform -translate-y-full"
            : "transform translate-y-0"
        }`}
      >
        <div
          className={`text-center transition-opacity duration-800 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentIndex >= 0 && currentIndex < greetings.length && (
            <div
              key={currentIndex}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white animate-text-cycle"
            >
              {greetings[currentIndex]}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes text-cycle {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.2);
          }
        }

        .animate-text-cycle {
          animation: text-cycle 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;