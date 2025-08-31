"use client";
import React, { useState, useEffect } from "react";
import HomePage from "./Hero";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LandingPage = ({
  greetings = [
    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ",
    "Bonjour",
    "ನಮಸ್ಕಾರ",
    "ہیلو",
    "Olá",
    "নমস্কাৰ",
    "नमस्ते",
  ],
  intervalDuration = 500,
  finalContent = <HomePage />,
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showFinalContent, setShowFinalContent] = useState(false);
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
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
      // Last greeting finished, show lottie first
      const lottieTimer = setTimeout(() => {
        setShowLottie(true);

        // After lottie duration, slide up and show final content
        const finalTimer = setTimeout(() => {
          setIsAnimating(false);
          setTimeout(() => {
            setShowFinalContent(true);
          }, 800);
        }, 3000); // 3 seconds for lottie

        return () => clearTimeout(finalTimer);
      }, 500);

      return () => clearTimeout(lottieTimer);
    }
  }, [currentIndex, greetings.length, intervalDuration]);

  return (
    <div className={`relative`}>
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
          {/* Show greeting if lottie not playing */}
          {currentIndex >= 0 && currentIndex < greetings.length && !showLottie && (
            <div
              key={currentIndex}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-light animate-text-cycle text-white"
            >
              {greetings[currentIndex]}
            </div>
          )}

          {/* Show lottie animation with consistent sizing */}
          {showLottie && (
            <div className="lottie-container">
              <DotLottieReact 
                src="/Welcome.lottie" 
                loop 
                autoplay
                className="lottie-animation"
              />
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

        .lottie-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .lottie-animation {
          width: 200px;
          height: 200px;
        }

        /* Tablet screens and up */
        @media (min-width: 768px) {
          .lottie-animation {
            width: 400px;
            height: 400px;
          }
        }

        /* Large screens */
        @media (min-width: 1024px) {
          .lottie-animation {
            width: 900px;
            height: 900px;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
