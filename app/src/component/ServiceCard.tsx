import React from 'react'

interface ServiceCardProps {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
}

const ServiceCard = ({ image, title, subtitle, description, link, icon }: ServiceCardProps) => {
    // Default icon if none provided
    const defaultIcon = (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    return (
        <div className="relative w-full h-[300px] md:h-[350px] lg:h-[350px] rounded-lg overflow-hidden group cursor-pointer">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent transition-all duration-300" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8 lg:p-10 text-white">
                <div className="flex flex-col gap-1 md:gap-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 flex items-center justify-center  backdrop-blur-sm group-hover:border-white transition-colors duration-300">
                        {icon || defaultIcon}
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                        {title}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium">
                        {subtitle}
                    </p>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                        {description}
                    </p>
                    <a
                        href={link}
                        className="inline-flex items-center text-base md:text-lg font-semibold text-white mt-2 group/link"
                    >
                        Learn More
                        <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard