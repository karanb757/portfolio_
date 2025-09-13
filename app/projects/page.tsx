"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Content from "./Content";
import Image from "next/image";

export default function ThreeDCardDemo() {
  return (
    <>
      <div className="hidden sm:block">
      <div className="px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold pt-20 sm:pt-24 md:pt-28 lg:pt-32 mb-8">
          PROJECTS
        </h1>
        
        {/* Card Grid - Responsive */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-2">
          
          {/* Card 1 - AI-LMS */}
          <CardContainer className="inter-var w-full max-w-sm">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-white"
              >
                AI-LMS
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Learn & Practise things in a structured way
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/project/ai-lmss.png"
                  height="1000"
                  width="1000"
                  className="h-48 sm:h-56 md:h-60 w-full object-contain group-hover/card:shadow-xl"
                  alt="AI-LMS thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-16 sm:mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://ai-lms-v3.vercel.app/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 2 - FindMyPG */}
          <CardContainer className="inter-var w-full max-w-sm">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
              >
                FindMyPG
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Finding PGs at one click 
              </CardItem>
              <CardItem translateZ="100" className="mt-4">
                <Image
                  src="/project/findmypg.png"
                  height="1000"
                  width="1000"
                  className="h-45 sm:h-56 md:h-60  object-contain group-hover/card:shadow-xl"
                  alt="FindMyPG thumbnail"
                />
              </CardItem>
              <div className="flex items-center mt-16 sm:mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://fmp-lemon.vercel.app/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 3 - skiperUI */}
          <CardContainer className="inter-var w-full max-w-sm">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
              >
                SkiperUI
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Component based Library Made Easy
              </CardItem>
              
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/project/skiperr.png"
                  height="1000"
                  width="1000"
                  className="h-48 sm:h-56 md:h-60 w-full object-contain group-hover/card:shadow-xl"
                  alt="Portfolio thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-16 sm:mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          
        </div>
      </div>
      </div>

      <Content />
    </>
  )
}
