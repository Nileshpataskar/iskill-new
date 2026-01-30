"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const services = [
    {
        image: "/service/training.svg",
        title: "Skill Gap Analysis",
        subtitle: "Spot the gaps. Spark the growth.",
        description:
            "We turn performance blind spots into growth opportunities with data-driven insights.",
        link: "/about",
    },
    {
        image: "/service/instructor.svg",
        title: "Instructor-Led Training",
        subtitle: "Learning with a human edge.",
        description:
            "Live, expert-driven sessions designed around real .",
        link: "/about",
    },
    {
        image: "/service/training.svg",
        title: "1:1 & Group Coaching",
        subtitle: "Coaching that creates momentum.",
        description:
            "high-impact live learning interventions annually.",
        link: "/about",
    },
    {
        image: "/service/lms.svg",
        title: "eLearning & LMS",
        subtitle: "Content that performs. Platforms that scale.",
        description:
            "Digital learning experiences and platforms built for scale.",
        link: "/about",
    },
    {
        image: "/service/psycho.svg",
        title: "Psychometric Assessments",
        subtitle: "Understand what's beneath the surface.",
        description:
            "Structured assessments to understand behavior. ",
        link: "/about",
    },
];

const VISIBLE_CARDS = 7;

const NewServiceSection = () => {
    const [centerIndex, setCenterIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const totalCards = services.length;

    const prev = useCallback(() => {
        setCenterIndex((p) => p - 1);
    }, []);

    const next = useCallback(() => {
        setCenterIndex((p) => p + 1);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            next();
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, next]);

    const getServiceData = (continuousIndex: number) => {
        const actualIndex = ((continuousIndex % totalCards) + totalCards) % totalCards;
        return services[actualIndex];
    };

    const visibleIndices = [];
    for (let i = centerIndex - VISIBLE_CARDS; i <= centerIndex + VISIBLE_CARDS; i++) {
        visibleIndices.push(i);
    }

    // Responsive card spacing based on window width
    const getResponsiveSpacing = () => {
        if (typeof window === 'undefined') return 320;
        if (window.innerWidth < 640) return 180;
        if (window.innerWidth < 768) return 220;
        if (window.innerWidth < 1024) return 280;
        return 320;
    };

    const getCardTransform = (continuousIndex: number) => {
        const offset = continuousIndex - centerIndex;

        const cardSpacing = getResponsiveSpacing();

        const x = offset * cardSpacing;

        const y = Math.pow(Math.abs(offset), 1.6) * 40;

        const scale = 1;

        const rotateZ = offset * 4;

        const opacity = 1;

        const zIndex = 100 - Math.abs(offset) * 10;

        return { x, y, scale, opacity, zIndex, rotateZ };
    };

    const realActiveIndex = ((centerIndex % totalCards) + totalCards) % totalCards;

    const handleDotClick = (targetRealIndex: number) => {
        const currentReal = realActiveIndex;
        let diff = targetRealIndex - currentReal;

        if (diff > totalCards / 2) diff -= totalCards;
        if (diff < -totalCards / 2) diff += totalCards;

        setCenterIndex((p) => p + diff);
    };

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#e8f4f8] via-[#d4eef5] to-[#1FC0F3] py-20">
            {/* Header Section */}
            <div className="relative z-10 text-center mb-8 md:mb-12 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-gray-800 tracking-tight mb-3">
                    How we support{" "}
                    <span className="text-cyan-600">workplace learning</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-sm mx-auto">
                    Built to support skills across roles, levels, and growth stages.
                </p>
                <div className="relative z-10 text-center mb-6 md:mb-10 md:mt-10">
                    <h3 className="text-xl sm:text-2xl md:text-5xl font-regular text-gray-800 tracking-tight">
                        Services
                    </h3>
                </div>
            </div>
            {/* Services Title */}
            <div
                className="relative w-full h-[320px] sm:h-[360px] md:h-[420px] flex items-start justify-center overflow-hidden"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onTouchStart={() => setIsAutoPlaying(false)}
                onTouchEnd={() => setTimeout(() => setIsAutoPlaying(true), 3000)}
            >

                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {visibleIndices.map((continuousIndex) => {
                        const service = getServiceData(continuousIndex);
                        const { x, y, scale, opacity, zIndex, rotateZ } = getCardTransform(continuousIndex);
                        const isActive = continuousIndex === centerIndex;

                        return (
                            <motion.div
                                key={continuousIndex}
                                animate={{
                                    x,
                                    y,
                                    scale,
                                    opacity,
                                    rotateZ,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                onClick={() => setCenterIndex(continuousIndex)}
                                style={{
                                    zIndex,
                                    transformStyle: "preserve-3d",
                                }}
                                className={`absolute w-[200px] xs:w-[220px] sm:w-[260px] md:w-[300px] cursor-pointer
                                    bg-white rounded-2xl shadow-xl overflow-hidden
                                    transition-shadow duration-300
                                    ${isActive ? "shadow-2xl ring-2 ring-cyan-400/50" : "hover:shadow-2xl"}
                                `}
                            >
                                {/* Card Content */}
                                <div className="p-3 sm:p-4 md:p-5">
                                    {/* Image Container */}
                                    <div className="relative w-full h-[100px] sm:h-[130px] md:h-[160px] mb-3 sm:mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-contain p-2"
                                            sizes="(max-width: 768px) 260px, 300px"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 mb-1">
                                        {service.title}
                                    </h3>

                                    {/* Subtitle */}


                                    {/* Description - only show on active card */}
                                    <div className="flex justify-between items-center gap-2">
                                        <AnimatePresence>
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-sm text-gray-600 leading-relaxed line-clamp-3"
                                            >
                                                {service.description}
                                            </motion.p>
                                        </AnimatePresence>

                                        {/* Arrow Link */}
                                        <motion.a
                                            href={service.link}
                                            className="inline-flex items-center gap-1 mt-3 text-cyan-600 hover:text-cyan-700 text-sm font-medium group"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="w-7 h-7 rounded-full border border-cyan-600 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                                                →
                                            </span>
                                        </motion.a>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="relative z-10 flex items-center justify-center gap-4 mt-10">
                <motion.button
                    onClick={prev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg 
                        flex items-center justify-center text-gray-700 hover:bg-white 
                        hover:text-cyan-600 transition-colors border border-gray-200/50"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === realActiveIndex
                                ? "bg-cyan-600 w-8"
                                : "bg-gray-400/50 hover:bg-gray-500"
                                }`}
                        />
                    ))}
                </div>

                <motion.button
                    onClick={next}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg 
                        flex items-center justify-center text-gray-700 hover:bg-white 
                        hover:text-cyan-600 transition-colors border border-gray-200/50"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>

        </section>
    );
};

export default NewServiceSection;