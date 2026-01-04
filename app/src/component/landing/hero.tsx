'use client'
import { useEffect, useState } from "react";

const heroImages = [
    "/landing/hero1.svg",
    "/landing/hero3.svg",
    "/landing/hero4.svg",
    "/landing/hero2.svg",
  ];
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, []);
    return (
        <>
            <div
                className='h-screen w-full relative bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
              >
                <img src="/landing/Wave.png" alt="hero" className='absolute bottom-0 left-0 w-full h-auto object-cover' />
                
                {/* Book a Demo Button - Bottom Left */}
                <div className='absolute bottom-8 left-4 md:left-32 md:bottom-40 z-10'>
                    <a
                        href="/contactus"
                        className='group relative inline-flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 border-2 border-white/20  bg-white/40 text-gray-800 font-semibold text-base md:text-lg rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 overflow-hidden'
                    >
                        {/* Shine effect */}
                        <span className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></span>
                        
                        {/* Button content */}
                        <span className='relative z-10 flex items-center gap-2'>
                            <svg className='w-5 h-5 md:w-6 md:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                            </svg>
                            <span>Book a Demo</span>
                        </span>
                        <span className='relative z-10 group-hover:translate-x-1 transition-transform duration-300 text-xl'>→</span>
                    </a>
                </div>
            </div>
            
            <div className='w-full bg-white'>
                <div className='flex flex-col md:items-center md:flex-row max-w-7xl mx-auto gap-6 md:gap-12 lg:gap-16 px-4 md:px-6 lg:px-8 py-8'>
                    {/* Left side - Professionals image */}
                    <div className='w-full md:w-1/2 h-96 md:h-125 '>
                        <img src="/landing/emp.png" alt="Professionals" className='w-full h-full object-fill' />
                    </div>

                    {/* Right side - Text content */}
                    <div className='w-full md:w-1/2 h-96 md:h-125 lg:h-150 flex flex-col justify-center items-start'>
                        <div className='max-w-full'>
                            <h1 className='text-2xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 text-left'>
                                Shaping Skills. Powering Futures.
                            </h1>
                            <p className='text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed text-left'>
                                At iSkillBox, we redefine how people learn and grow. With immersive learning, tailored assessments, and certification programs designed for real-world impact, we help every learner become career-ready and globally relevant.
                            </p>
                            <a
                                href="/about"
                                className='inline-flex items-center text-base md:text-lg font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-200 group text-left'
                            >
                                Know More
                                <span className='ml-2 group-hover:translate-x-1 transition-transform duration-200'>→</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

          
        </>
    )
}

export default Hero