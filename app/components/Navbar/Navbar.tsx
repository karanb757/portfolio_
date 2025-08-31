"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ScheduleButton from './Cal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop and Tablet Navbar */}
      <div className={`fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 transition-all duration-300 px-3 sm:px-6 py-2 sm:py-3 ${isScrolled ? 'opacity-100' : 'opacity-100'} hidden md:block`}>
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <ScheduleButton />
          </div>

          <div className='backdrop-blur-md border border-white/10 rounded-full sm:px-4 py-2 flex gap-2 sm:gap-4'>
            <Link className='text-xs sm:text-sm text-white hover:text-gray-300 transition-colors' href="/">Home</Link>
            <Link className='text-xs sm:text-sm text-white hover:text-gray-300 transition-colors' href="/showcase">Showcase</Link>
            <Link className='text-xs sm:text-sm text-white hover:text-gray-300 transition-colors' href="/projects">Projects</Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-black/90 backdrop-blur-md px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Mobile Schedule Button - Smaller */}
            <div className="flex-shrink-0">
              <button
                data-cal-namespace="30min"
                data-cal-link="karan-bodkhe-xelgqk/30min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-xs text-white hover:bg-white/10 transition-colors duration-300 shadow-lg"
              >
                Schedule Meeting
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border border-white/10 px-3 py-2 rounded-full transition-colors hover:bg-white/10 flex items-center"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col gap-1">
                <span className={`w-4 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-4 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-4 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}>
            <div className='backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex flex-col gap-3'>
              <Link 
                className='text-sm text-white hover:text-gray-300 transition-colors py-2 text-center' 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                className='text-sm text-white hover:text-gray-300 transition-colors py-2 text-center border-white/10' 
                href="/showcase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Showcase
              </Link>
              <Link 
                className='text-sm text-white hover:text-gray-300 transition-colors py-2 text-center' 
                href="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;