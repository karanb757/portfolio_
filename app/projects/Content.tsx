import React from 'react'
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import VortexSection  from '../components/sections/VortexSection'

const Content = () => {
  return (
    <div>
    <div className="">
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-8">

        {/* Header */}
        <div className="space-y-4">
          <div className="text-6xl md:text-8xl font-bold text-gray-300">
            01
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            AI-LMS
          </h1>
          <p className="text-gray-400 text-lg uppercase tracking-wider">
            ONE STOP SOLUTION FOR STRUCTURED LEARNING
          </p>
        </div>

        {/* Description */}
        <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
            Not just another online learning tool{' '}
            <span className="text-white font-semibold">AI-LMS.</span>{' '}
            A next-gen platform designed for personalized education. The AI-LMS project includes: 
            Adaptive learning paths powered by AI. Automated quiz & Flashcard generation,
            Seamless course management , Secure authentication with role-based access, and Intelligent recommendations 
            for courses and study materials & much more ...
            </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
        <a 
        href="https://ai-lms-v3.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-lime-300 transition-colors hover:cursor-pointer">
          <ExternalLink size={20} />
          Go to Live Website
        </button>
      </a>
          <button className="border border-gray-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:border-gray-400 transition-colors">
           Ready
          </button>
        </div>
        </div>

        {/* Right Video/Image Container */}
        <div className="relative">
        <Image
          src="/project/ai-lms.png" 
          alt="Portfolio preview" 
          width={800} 
          height={600} 
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        </div>
    </div>
  </div>
</div>


    
    <div className="">
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {
        /* Right Video/Image Container - Now on the left side */}
        <div className="relative order-1 lg:order-1">
          <div className="bg-gray-600 rounded-3xl aspect-video w-full flex items-center justify-center">

            {/* Video placeholder with icon */}
            <div className="relative">
            <Image
            src="/project/skiper.png" 
            alt="Portfolio preview" 
            width={800} 
            height={600} 
            className="object-cover transition-transform duration-300 hover:scale-110"
            />
            </div>
          </div>
        </div>

      {/* Left Content - Now on the right side */}
      <div className="space-y-8 order-2 lg:order-2">

        {/* Header */}
        <div className="space-y-4">
          <div className="text-6xl md:text-8xl font-bold text-gray-300">
            02
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            SkiperUI
          </h1>
          <p className="text-gray-400 text-lg uppercase tracking-wider">
          <p className="text-gray-400 text-lg uppercase tracking-wider">
            MODERN UI COMPONENTS FOR DEVELOPERS
          </p>

          </p>
        </div>

        {/* Description */}
        <div className="space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed">
        SkiperUI comes with wide range of reusable components, Dark & Light mode support, 
        Tailwind CSS + Framer Motion animations, Built-in accessibility features, 
        Customizable themes, and a focus on developer productivity & clean design.
        </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-lime-300 transition-colors">
            <ExternalLink size={20} />
            Go to Live Website
          </button>
          <button className="border border-gray-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:border-gray-400 transition-colors">
            Ready
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="">
  <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div className="space-y-8">

        {/* Header */}
        <div className="space-y-4">
          <div className="text-6xl md:text-8xl font-bold text-gray-300">
            03
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            FindMyPG
          </h1>
          <p className="text-gray-400 text-lg uppercase tracking-wider">
            Find PG near you  
          </p>
        </div>

        {/* Description */}
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            FindMyPG is a smart 
            web application that helps bachelors and working professionals 
            easily find PG accommodations near them. With an intuitive interface of Google Maps
            and seamless search functionality, it simplifies the process of 
            discovering nearby rooms and shared spaces.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-lime-300 transition-colors">
            <ExternalLink size={20} href='/'/>
            Go to Live Website
          </button>
          <button className="border border-gray-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:border-gray-400 transition-colors">
            Ready
          </button>
        </div>
      </div>

      {/* Right Video/Image Container */}
      <div className="relative">
        <div className="bg-gray-600 rounded-3xl aspect-video w-full flex items-center justify-center">

          {/* Video placeholder with icon */}
          <div className="text-center space-y-4">
          <div className="relative">
          <Image 
          src="/project/findmypg.png" 
          alt="Portfolio preview" 
          width={800} 
          height={600} 
          className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div className="">
  <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Right Video/Image Container - Now on the left side */}
      <div className="relative order-1 lg:order-1">
        <div className="bg-gray-600 rounded-3xl aspect-video w-full flex items-center justify-center">

          {/* Video placeholder with icon */}
          <div className="text-center space-y-4 bg-black">
          <Image 
          src="/project/portfolio.png" 
          alt="Portfolio preview" 
          width={800} 
          height={600} 
          className=" object-cover transition-transform duration-300 hover:scale-110"
          />
          </div>
        </div>
      
      </div>

      {/* Left Content - Now on the right side */}
      <div className="space-y-8 order-2 lg:order-2">

        {/* Header */}
        <div className="space-y-4">
          <div className="text-6xl md:text-8xl font-bold text-gray-300">
            04
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            PORTFOLIO
          </h1>
          <p className="text-gray-400 text-lg uppercase tracking-wider">
            ADVANCED ANIMATIONS | CLEAN UI | PORTFOLIO
          </p>
        </div>

        {/* Description */}
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
          Portfolio Website crafted 
          with modern web technologies, focusing on sleek animations, 
          smooth user interactions, and a pixel-perfect UI. 
          It is designed to showcase projects in a highly engaging 
          and visually appealing way.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-lime-300 transition-colors">
            <ExternalLink size={20} />
            Go to Live Website
          </button>
          <button className="border border-gray-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:border-gray-400 transition-colors">
            Ready
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<VortexSection />
</div>
)
}

export default Content