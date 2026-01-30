'use client'
import React from 'react'

interface ClienteleProps {
    background?: boolean
}

const Clientele = () => {
    const logoCount = 15;

    return (
        <>
            {/* Client Logos Section */}
            <div className='w-full px-4 md:px-6 lg:px-8 mt-20'>
                {/* Subtitle */}
                <p
                    className='text-sm md:text-base text-gray-900 text-center mb-8'
                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                >
                    Chosen by organizations that value real capability.
                </p>

                {/* Marquee container with overflow hidden */}
                <div className='relative overflow-hidden w-full'>
                    {/* Fade edges */}
                    <div className='absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#b8e4f0] to-transparent z-10 pointer-events-none' />
                    <div className='absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#b8e4f0] to-transparent z-10 pointer-events-none' />

                    {/* Marquee track */}
                    <div className='flex animate-marquee'>
                        {/* First set of logos */}
                        {Array.from({ length: logoCount }, (_, i) => i + 1).map((num) => (
                            <div
                                key={`first-${num}`}
                                className='flex-shrink-0 flex items-center justify-center mx-8 md:mx-12'
                            >
                                <img
                                    src={`/ClientLogo/${num}.webp`}
                                    alt={`Client ${num}`}
                                    className='h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80'
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {Array.from({ length: logoCount }, (_, i) => i + 1).map((num) => (
                            <div
                                key={`second-${num}`}
                                className='flex-shrink-0 flex items-center justify-center mx-8 md:mx-12'
                            >
                                <img
                                    src={`/ClientLogo/${num}.webp`}
                                    alt={`Client ${num}`}
                                    className='h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS for marquee animation */}
            <style jsx>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-marquee {
                        animation: marquee 25s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}</style>
        </>
    )
}

export default Clientele