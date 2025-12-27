import React from 'react'

const Clientele = () => {
    return (
        <div className='w-full py-16 md:py-20 lg:py-24 bg-white' 
        style={{ 
            backgroundImage: 'url(/landing/clientele-bg.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat' 
        }}>
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
                <h2 className='text-2xl md:text-xl font-regular text-gray-400 text-center mb-8 md:mb-12 md:pt-8'>
                    Globally Trusted by Top Clientele
                </h2>
                <div className='relative overflow-hidden'>
                    <div
                        className='flex gap-8 md:gap-12 lg:gap-16'
                        style={{ animation: 'marquee 10s linear infinite' }}
                    >
                        {/* First set of logos */}
                        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                            <div
                                key={`first-${num}`}
                                className='shrink-0 flex items-center justify-center'
                            >
                                <img
                                    src={`/ClientLogo/${num}.webp`}
                                    alt={`Client ${num}`}
                                    className='h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100'
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                            <div
                                key={`second-${num}`}
                                className='shrink-0 flex items-center justify-center'
                            >
                                <img
                                    src={`/ClientLogo/${num}.webp`}
                                    alt={`Client ${num}`}
                                    className='h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientele