'use client'

import React from 'react'

const TalkToOurTeam = () => {
    const scrollToContactForm = () => {
        const contactForm = document.getElementById('contact-form')
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div
            className='relative w-full bg-cover bg-center flex flex-col items-center justify-center text-center h-[50vh] sm:h-[60vh] px-4'
            style={{ backgroundImage: 'url(/contact/talkToOurTeam.png)' }}
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-black/40'></div>

            {/* Content */}
            <div className='relative z-10 px-4'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-medium text-white mb-4'>
                    Talk to Our Team
                </h1>
                <p className='mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/90'>
                    Whether you're exploring our services or ready to transform your workforce, our sales experts are just a message away.
                </p>
                <button
                    onClick={scrollToContactForm}
                    className="inline-block rounded-2xl border border-white/40 bg-white/10 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-medium text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer"
                >
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default TalkToOurTeam
