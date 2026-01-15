 'use client'

import React from 'react'

const SuccessHeroSection = () => {
    return (
        <section className="relative min-h-[60vh] md:h-[80vh] bg-[#08a4d3]">
            <div
                className='h-full w-full bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-0 md:pt-20 lg:pt-40 gap-6 md:gap-8 lg:gap-12'
            >
                <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-6 text-center md:text-left'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white max-w-3xl'>
                        Let's Connect
                    </h1>
                    <h3 className='text-sm sm:text-base md:text-lg lg:text-xl font-light text-white max-w-xl'>
                        Have a question, a requirement, or just exploring possibilities? Share a few details and our team will get back to you shortly. 
                    </h3>
                    
                    <button className='bg-gray-500/20 md:min-w-[30%] md:max-w-[30%] sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md border border-white cursor-pointer hover:bg-gray-500/30 transition-colors duration-200 text-sm sm:text-base'
                     onClick={() => {
                        const contactForm = document.getElementById('contact-form')
                        if (contactForm) {
                            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                    }}>
                        Get in Touch
                    </button>
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <img src="/contact/hero_new.png" alt="hero" className='w-full h-auto max-w-md md:max-w-full' />
                </div>
            </div>
        </section>
    )
}

export default SuccessHeroSection
