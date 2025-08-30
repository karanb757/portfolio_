"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Content from "./Content";

export default function ThreeDCardDemo() {
  return (
    <>
    <div>
    <h1 className="text-8xl text-center font-bold pt-32">
    PROJECTS
    </h1>
    <div className="items-center justify-center flex gap-2 pt-2">
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white "
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
          <img
            src="/project/ai-lms.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://ai-lms-v3.vercel.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          PORTFOLIO
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Animated clean UI 
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/project/portfolio.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
    <CardItem
      translateZ="50"
      className="text-xl font-bold text-neutral-600 dark:text-white"
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
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="/project/welcome.png"
        height="1000"
        width="1000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div className="flex flex-end items-center mt-20">
      <CardItem
        translateZ={20}
        as="a"
        href="/"
        target="__blank"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        Try now →
      </CardItem>
    </div>
  </CardBody>
    </CardContainer>
    </div>
    </div>

    <Content />
    </>
  )
}
