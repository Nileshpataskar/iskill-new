"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const services = [
    {
        image: "/service/training.svg",
        title: "Skill Gap Analysis",
        subtitle: "Spot the gaps. Spark the growth.",
        description:
            "We turn performance blind spots into growth opportunities with data-driven diagnostics that map where your teams need to go and how to get them there.",
        link: "/about",
    },
    {
        image: "/service/instructor.svg",
        title: "Instructor-Led Training",
        subtitle: "Learning with a human edge.",
        description:
            "Our expert-led virtual and in-person training blends industry know-how with real-time interaction designed to drive skill, confidence, and change.",
        link: "/about",
    },
    {
        image: "/service/training.svg",
        title: "1:1 & Group Coaching",
        subtitle: "Coaching that creates momentum.",
        description:
            "From personalized executive coaching to high-impact team sessions we help people lead better, grow faster, and think deeper.",
        link: "/about",
    },
    {
        image: "/service/lms.svg",
        title: "eLearning & LMS",
        subtitle: "Content that performs. Platforms that scale.",
        description:
            "We design mobile-first, gamified eLearning paired with a smart LMS so you can track, train, and transform teams at scale.",
        link: "/about",
    },
    {
        image: "/service/psycho.svg",
        title: "Psychometric Assessments",
        subtitle: "Understand what's beneath the surface.",
        description:
            "We go beyond resumes to decode personality, behavior, and potential so you hire right, lead smart, and build strong teams.",
        link: "/about",
    },
];

const NewServiceSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const prev = useCallback(() => {
        setActiveIndex((p) => (p - 1 + services.length) % services.length);
    }, []);

    const next = useCallback(() => {
        setActiveIndex((p) => (p + 1) % services.length);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            next();
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, next]);

    // Calculate position for each card - CURVED ARC with TILT style
    const getCardTransform = (index: number) => {
        const total = services.length;
        // Calculate the offset from the active card
        let offset = index - activeIndex;

        // Normalize offset for wrapping - this creates the infinite loop feel
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        // Card spacing in pixels
        const cardSpacing = 320;

        // Horizontal position - linear movement
        const x = offset * cardSpacing;

        // CURVED ARC: Y position follows a parabolic curve (sides dip down)
        const y = Math.pow(Math.abs(offset), 1.6) * 40;

        // NO SCALE - cards stay same size like in reference
        const scale = 1;

        // Tilt rotation on Z-axis (cards tilt outward from center)
        // Left cards tilt counter-clockwise, right cards tilt clockwise
        const rotateZ = offset * 4;

        // Only show cards within visible range for seamless infinite feel
        // Cards beyond ±2 positions are hidden
        // const isVisible = Math.abs(offset) <= 2.5;
        // const opacity = isVisible ? Math.max(1 - Math.abs(offset) * 0.8, 0.6) : 0;
        const opacity = 1
        // Z-index for layering (center card on top)
        const zIndex = 100 - Math.abs(offset) * 10;

        return { x, y, scale, opacity, zIndex, rotateZ };
    };

    return (
        <section className="relative min-h-[700px] py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#e8f4f8] via-[#d4eef5] to-[#7dd3e8]">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
            </div>

            {/* Section Title */}
            <div className="relative z-10 text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
                    Services
                </h2>
            </div>

            {/* 3D Carousel Container - Curtain/Plane Style */}
            <div
                className="relative w-full h-[520px] md:h-[580px] flex items-start justify-center pt-8 overflow-hidden"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {services.map((service, index) => {
                        const { x, y, scale, opacity, zIndex, rotateZ } = getCardTransform(index);
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={service.title}
                                animate={{
                                    x,
                                    y,
                                    scale,
                                    opacity,
                                    rotateZ,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier
                                }}
                                onClick={() => setActiveIndex(index)}
                                style={{
                                    zIndex,
                                    transformStyle: "preserve-3d",
                                }}
                                className={`absolute w-[260px] sm:w-[280px] md:w-[300px] cursor-pointer
                                    bg-white rounded-2xl shadow-xl overflow-hidden
                                    transition-shadow duration-300
                                    ${isActive ? "shadow-2xl ring-2 ring-cyan-400/50" : "hover:shadow-2xl"}
                                `}
                            >
                                {/* Card Content */}
                                <div className="p-4 md:p-5">
                                    {/* Image Container */}
                                    <div className="relative w-full h-[140px] md:h-[160px] mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-contain p-2"
                                            sizes="(max-width: 768px) 260px, 300px"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-1">
                                        {service.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-sm text-cyan-600 font-medium mb-2">
                                        {service.subtitle}
                                    </p>

                                    {/* Description - only show on active card */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-sm text-gray-600 leading-relaxed line-clamp-3"
                                            >
                                                {service.description}
                                            </motion.p>
                                        )}
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
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="relative z-10 flex items-center justify-center gap-4 mt-8">
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
                            onClick={() => setActiveIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
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