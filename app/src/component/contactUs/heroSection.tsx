'use client'

import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative h-[80vh] md:h-[80vh] bg-[#08a4d3]">
            <div
                className='h-full w-full bg-cover bg-center md:pt-40 flex items-center justify-center px-60 '
            >
                <div className='w-1/2 flex flex-col gap-6 ' >
                    <h1 className='text-2xl sm:text-3xl md:text-5xl font-light text-left text-white max-w-3xl'>
                        Let’s Connect
                    </h1>
                    <h3 className='text-base sm:text-lg md:text-xl font-light text-left text-white max-w-3xl'>
                        Have a question, a requirement, or just exploring possibilities? Share a few details and our team will get back to you shortly. 
                    </h3>
                    
                    <button className='bg-gray-500/20 w-[30%] text-white px-4 py-2 rounded-md border border-white cursor-pointer'
                     onClick={() => {
                        const contactForm = document.getElementById('contact-form')
                        if (contactForm) {
                            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                    }}>
                        Get in Touch
                    </button>
                </div>
                <div className='w-1/2 '>

                    <img src="/contact/hero_new.png" alt="hero" className='left-0 w-full h-auto ' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
