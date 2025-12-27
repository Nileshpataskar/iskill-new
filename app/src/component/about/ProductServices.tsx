'use client'

import React from 'react'
import Image from 'next/image'

const ProductsServices = () => {
    const services = [
        {
            icon: '/about/product-icons/Layer_1.png',
            title: 'Skill Gap Analysis',
            description: 'Pinpoint where learning starts with data-backed diagnostics that drive smarter development.',
        },
        {
            icon: '/about/product-icons/Group 342.png',
            title: 'Instructor-Led Training',
            description: 'Live, expert-led sessions tailored to your team\'s goals online, onsite, or hybrid.',
        },
        {
            icon: '/about/product-icons/Group 343.png',
            title: '1:1 & Group Coaching',
            description: 'Personalized coaching that fuels individual growth and team transformation.',
        },
        {
            icon: '/about/product-icons/Group 344.png',
            title: 'E-Learning & LMS',
            description: 'Engaging content + Intuitive platform = learning that performs at scale.',
        },
        {
            icon: '/about/product-icons/Group.png',
            title: 'Psychometric Assessments',
            description: 'Go beyond skills: understand behavior, personality, and potential.',
        },
        {
            icon: '/about/product-icons/Layer_1-1.png',
            title: 'iSkillEvaluate',
            description: 'Our AI-powered assessment engine to screen, evaluate, and hire smarter.',
        },
        {
            icon: '/about/product-icons/Vector.png',
            title: 'Smart Screening – Talent Assessor',
            description: 'Fast-track hiring with intelligent screening that filters for true fit.',
        },
        {
            icon: '/about/product-icons/Capa_1.png',
            title: 'Hiring Assistant',
            description: 'Your digital recruiter—automated, efficient, and always learning.',
        },
        {
            icon: '/about/product-icons/Layer_1.png',
            title: 'Assessment Skill Base',
            description: 'Role-specific, ready-to-use skill assessments for faster decisions.',
        },
        {
            icon: '/about/product-icons/Group 342.png',
            title: 'Off-the-Shelf Courses',
            description: 'Plug and play learning content for faster team enablement.',
        },
    ]

    return (
        <section className="bg-[#EAF4FF] py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4 border-l-4 border-lime-400 pl-3">
               Products and Services     </h1>
               
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-10">
                    {services.map((service, idx) => (
                        <div 
                            className="flex flex-col bg-transparent  p-6 md:p-8 ." 
                            key={idx}
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 mb-4 flex items-center justify-center">
                                <img 
                                    src={service.icon} 
                                    alt={service.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className='border-l-2 border-green-400 p-4'>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed grow">
                                {service.description}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center text-base font-semibold text-slate-700 hover:text-slate-900 mt-4 group/link"
                            >
                                Learn More
                                <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                            </a>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsServices
