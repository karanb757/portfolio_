import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";
import HomePage2 from "./HomePage2";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import  HomePage3  from "./HomePage3";

const HomePage = () => {

  const content = [
    {
      title: "HTML Development",
      description:
        "HTML (HyperText Markup Language) is used to structure content on the web, defining elements like headings, paragraphs, links, and images.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/htmll.png"
            width={300}
            height={300}
            className="w-40 h-40 object-cover"
            alt="HTML Logo"
          />
        </div>
      ),
    },
    {
      title: "CSS Styling",
      description:
        "CSS (Cascading Style Sheets) is used to style and layout web pages, controlling colors, fonts, spacing, and responsive design.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white bg-black">
          <img
            src="/css.jpg"
            width={300}
            height={300}
            className="w-60 h-60 object-contain pb-4"
            alt="CSS Logo"
          />
        </div>
      ),
    },
    {
      title: "JavaScript Functionality",
      description:
        "JavaScript is a programming language that adds interactivity and dynamic behavior to web pages, such as animations, forms, and data updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/jss.png"
            width={300}
            height={300}
            className="w-35 h-35 object-contain object-center"
            alt="JavaScript Logo"
          />
        </div>
      ),
    },
    {
      title: "React.js Development",
      description:
        "React.js is a JavaScript library for building reusable, component-based user interfaces for web applications.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white bg-black">
          <img
            src="/react.js.png"
            width={300}
            height={300}
            className="h-38 w-75 "
            alt="React Logo"
          />
        </div>
      ),
    },
    {
      title: "Next.js Framework",
      description:
        "Next.js is a React framework that enables server-side rendering, static site generation, and optimized performance for web applications.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/nextt.png"
            width={300}
            height={300}
            className="w-60 h-35 object-center"
            alt="Next.js Logo"
          />
        </div>
      ),
    },
    {
      title: "Node.js Backend",
      description:
        "Node.js is a runtime environment that allows executing JavaScript on the server, enabling scalable backend development and API creation.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <img
            src="/nodeJS.png"
            width={300}
            height={300}
            className="w-60 h-70 object-contain object-center pb-10"
            alt="Node.js Logo"
          />
        </div>
      ),
    },
    {
      title: "MongoDB Database",
      description:
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it scalable and ideal for modern applications.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black">
        </div>
      ),
    },
  ];
  
  return (
    <div className="bg-black">
      <div className="relative">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Code by Logic Design by Passion <br/> 
            <span className="text-5xl bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700  dark:from-neutral-600 dark:to-white md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Breathing Life into Lines of Code
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            I build websites and web apps with a perfect blend of clean code and stunning visuals.
          </p>
        </BackgroundLines>
      </div>

      <div className="h-screen bg-black w-full mt-18">
          <h1 className="text-center text-6xl font-semibold mb-10 pl-10 text-gray-300">TECH - STACKS</h1>
          <StickyScroll content={content}/>
      </div>
      
      <HomePage3/>

      <HomePage2/>
    </div>
  );
};

export default HomePage;