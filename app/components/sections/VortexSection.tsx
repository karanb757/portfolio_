"use client"
import { Vortex } from '@/components/ui/vortex'
import React from 'react'

const HomePage2 = () => {
  return (
    <div className='hidden sm:block h-[50vh] sm:h-[55vh] md:h-[60vh] bg-black mt-16 sm:mt-20 md:mt-24 '>
        <div>
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 sm:px-4 md:px-6 lg:px-10 py-4 w-full h-full"
            > 
            <div className='mt-95'>
              <p className='text-sm pl-3'>Hey there !{" "}
              <span className='cursor-pointer text-amber-300 hover:text-amber-600' onClick={() => window.open("/KaranResume.pdf")}>click Here</span>{" "}
              to Download Resume
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl text-center px-4 mt-100">
              Thanks For the visit 
              </p> 
              <p>crafted & designed by - karan757 ❤️</p>
            </div>
            
            </Vortex>
        </div>
    </div>
  )
}

export default HomePage2
