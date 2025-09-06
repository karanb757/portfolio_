import React from 'react'
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import VortexSection from '../components/sections/VortexSection'

const Content = () => {
  return (
    <>
    <div className="px-4 sm:px-6 md:px-8 h-auto">
      
      {/* Project 1 - AI-LMS */}
      <div className=" bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className=" py-40 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-300">
                01
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                AI-LMS
              </h1>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-wider">
                ONE STOP SOLUTION FOR STRUCTURED LEARNING
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Not just another online learning tool{' '}
                <span className="text-white font-semibold">AI-LMS.</span>{' '}
                A next-gen platform designed for personalized education. The AI-LMS project includes: 
                Adaptive learning paths powered by AI. Automated quiz & Flashcard generation,
                Seamless course management, Secure authentication with role-based access, and Intelligent recommendations 
                for courses and study materials & much more ...
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a 
                href="https://ai-lms-v3.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="w-full sm:w-auto bg-lime-400 text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-lime-300 transition-colors hover:cursor-pointer text-sm sm:text-base">
                  <ExternalLink size={16} className="sm:hidden" />
                  <ExternalLink size={20} className="hidden sm:block" />
                  <span className="sm:hidden">Live Site</span>
                  <span className="hidden sm:inline">Go to Live Website</span>
                </button>
              </a>
              <button className="w-full sm:w-auto border border-gray-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:border-gray-400 transition-colors text-sm sm:text-base">
                Ready
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative order-1 lg:order-2">
            <Image
              src="/project/ai-lms.png" 
              alt="AI-LMS preview" 
              width={800} 
              height={600} 
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Project 2 - SkiperUI */}
      <div className="bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="py-40 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          
          {/* Left Image Container */}
          <div className="relative order-1">
            <Image
              src="/project/skiper.png" 
              alt="SkiperUI preview" 
              width={800} 
              height={600} 
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-8 order-2">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-300">
                02
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                SkiperUI
              </h1>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-wider">
                MODERN UI COMPONENTS FOR DEVELOPERS
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                SkiperUI comes with wide range of reusable components, Dark & Light mode support, 
                Tailwind CSS + Framer Motion animations, Built-in accessibility features, 
                Customizable themes, and a focus on developer productivity & clean design.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="w-full sm:w-auto bg-lime-400 text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-lime-300 transition-colors text-sm sm:text-base">
                <ExternalLink size={16} className="sm:hidden" />
                <ExternalLink size={20} className="hidden sm:block" />
                <span className="sm:hidden">Live Site</span>
                <span className="hidden sm:inline">Go to Live Website</span>
              </button>
              <button className="w-full sm:w-auto border border-gray-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:border-gray-400 transition-colors text-sm sm:text-base">
                Ready
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 - FindMyPG */}
      <div className=" bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="py-40 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-300">
                03
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                FindMyPG
              </h1>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-wider">
                Find PG near you  
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                FindMyPG is a smart web application that helps bachelors and working professionals 
                easily find PG accommodations near them. With an intuitive interface of Google Maps
                and seamless search functionality, it simplifies the process of 
                discovering nearby rooms and shared spaces.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="w-full sm:w-auto bg-lime-400 text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-lime-300 transition-colors text-sm sm:text-base">
                <ExternalLink size={16} className="sm:hidden" />
                <ExternalLink size={20} className="hidden sm:block" />
                <span className="sm:hidden">Live Site</span>
                <span className="hidden sm:inline">Go to Live Website</span>
              </button>
              <button className="w-full sm:w-auto border border-gray-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:border-gray-400 transition-colors text-sm sm:text-base">
                Ready
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative order-1 lg:order-2">
            <Image 
              src="/project/findmypg.png" 
              alt="FindMyPG preview" 
              width={800} 
              height={600} 
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Project 4 - Portfolio */}
      <div className=" bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8 ">
        <div className="py-40 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

          {/* Left Image Container */}
          <div className="relative order-1">
            <Image 
              src="/project/portfolio.png" 
              alt="Portfolio preview" 
              width={800} 
              height={600} 
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-8 order-2">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-300">
                04
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                PORTFOLIO
              </h1>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-wider">
                ADVANCED ANIMATIONS | CLEAN UI | PORTFOLIO
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Portfolio Website crafted with modern web technologies, focusing on sleek animations, 
                smooth user interactions, and a pixel-perfect UI. 
                It is designed to showcase projects in a highly engaging 
                and visually appealing way.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="w-full sm:w-auto bg-lime-400 text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-lime-300 transition-colors text-sm sm:text-base">
                <ExternalLink size={16} className="sm:hidden" />
                <ExternalLink size={20} className="hidden sm:block" />
                <span className="sm:hidden">Live Site</span>
                <span className="hidden sm:inline">Go to Live Website</span>
              </button>
              <button className="w-full sm:w-auto border border-gray-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:border-gray-400 transition-colors text-sm sm:text-base">
                Ready
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="py-40 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"> 
        
      {/* Right Content */} 
      <div className="space-y-6 sm:space-y-8 order-2"> 
      
      {/* Header */} 
      <div className="space-y-4"> 
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"> 
          EXPERIENCE 
        </h1> 
        <p className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-wider"> 
        My Professional Journey </p> 
      </div> 
      
      {/* Internship Experience */}
      <div className="space-y-4"> 
        <div className="flex items-center gap-3"> 
        <div> 
          <h2 className="text-xl sm:text-2xl font-semibold">
            Frontend Engineer Intern
          </h2> 
          <p className="text-gray-400 text-sm sm:text-base"> 
            RotenX · Jan 2025 – Jun 2025 · 6 mos · Remote 
          </p> 
          </div> 
        </div> 
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"> 
        Collaborated on scalable and user-friendly web applications using React.js, Next.js, and modern JavaScript. Focused on performance optimization, accessibility, and delivering responsive UIs with smooth animations.
        </p> 
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
         Built an AI-powered browser, Resworb Browser, using Electron.js and React.js, achieving a 30% faster startup time and 25% lower memory usage. Additionally, developed Kaiga, an e-commerce frontend for photo framing with dynamic previews and a streamlined checkout flow, which improved user conversions by 20%. 
         </p> 
         </div> 

         </div>
         </div>
         </div>

      {/* EDUCATION Section */}
      <div className="bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8 mt-12 ">
      <div className="py-40 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

        {/* Right Content */}
        <div className="space-y-6 sm:space-y-8 order-2 ">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          EDUCATION
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-wider">
          Academic Journey
        </p>
      </div>

      {/* BTech Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">B.Tech in Information Technology</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              ITM, Gwalior · 2021 – 2025
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Learned core computer science concepts, web development, software engineering, 
          database management, and cloud technologies. Built projects using modern web stacks 
          and focused on practical applications of IT in real-world scenarios.
        </p>
      </div>

      {/* School Details */}
      <div className="space-y-4 pt-6">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">12th</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              United Children Hr. Secondary School · 2021
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
        Studied Physics, Chemistry, Mathematics, and Computer Science, focusing on 
        foundational concepts, problem-solving skills, and practical applications. 
        Gained strong analytical and logical thinking abilities through projects and experiments.
        </p>
      </div>

    </div>
  </div>
</div>

      <div className="block lg:hidden pb-20">
      <div className="flex flex-col items-center justify-center p-4">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Z2kwYTQ2MnZvem11YzVtMnMzaDg4cGtvMG5vY2VpdmxwbWUydTExaiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/lV9cGLzPFxtF4r18rN/giphy.gif" 
          alt="" 
          className="h-40 w-40"
        />
        <button className="mt-4 border-1 p-4 text-sm">Download Resume</button>
      </div>
      </div>

      <div className='block lg:hidden'>
      <div className=' pb-15 flex flex-col items-center'>
          <p className="">
          Thanks For the visit 
          </p> 
          <p>crafted & designed by - karan757 ❤️</p>
      </div>
      </div>
         


    </div>

    <VortexSection />
    </>
  )
}

export default Content