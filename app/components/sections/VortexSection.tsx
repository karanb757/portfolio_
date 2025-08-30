"use client"
import FlipLink from '@/components/ui/text-effect-flipper'
import { Vortex } from '@/components/ui/vortex'
import React from 'react'

const HomePage2 = () => {
  return (
    <div className='h-[60vh] bg-black mt-86'>
        <div className="border-4 border-green-400">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
              <div className='flex gap-10 text-center justify-center'>
              <img src="https://media.tenor.com/HfWp3sbA-VcAAAAi/oggy.gif" className='h-30 w-30' alt="" />
              </div>    
                <p className=" md:text-sm max-w-xl mt-6 text-center">
                For the visit    - crafted & designed by - karan757 ✌️
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <div className="relative ">
                <button 
                  onClick={() => window.open("/KaranResume.pdf")} 
                  className="px-6 py-3 border-2 border-pink-600 hover:bg-pink-600 text-white font-semibold shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Download Resume
                </button>
              </div>
                </div>
            </Vortex>
        </div>
    </div>
  )
}

export default HomePage2