
const Hero = () => {
    return (
        <>
            <div
                className='h-screen w-full relative bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: 'url(/landing/HeroBG.svg)' }}
            >
                <img src="/landing/Wave.png" alt="hero" className='absolute bottom-0 left-0 w-full h-auto object-cover' />
            </div>
            
            <div className='w-full bg-white'>
                <div className='flex flex-col md:flex-row max-w-7xl mx-auto gap-6 md:gap-12 lg:gap-16 px-4 md:px-6 lg:px-8 py-8'>
                    {/* Left side - Professionals image */}
                    <div className='w-full md:w-1/2 h-96 md:h-125 lg:h-150'>
                        <img src="/landing/emp.png" alt="Professionals" className='w-full h-full object-cover' />
                    </div>

                    {/* Right side - Text content */}
                    <div className='w-full md:w-1/2 h-96 md:h-125 lg:h-150 flex flex-col justify-center items-start'>
                        <div className='max-w-xl'>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-left'>
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