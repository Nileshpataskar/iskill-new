'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Clientele from "./clientele";
import Statistics from "./statistics";

const rotatingWords = [" invent", " lead", " adapt in the age of AI", " impact"];

const Hero = () => {
    const [wordIndex, setWordIndex] = useState(0);

    // Rotate words every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className='w-full relative bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(/landing/heroNew.svg)` }}
        >
            {/* First Screen - Hero Content Centered */}
            <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
                <div className="text-center max-w-4xl mx-auto mt-24 sm:mt-32 md:mt-40 lg:mt-60">
                    {/* Main Heading */}
                    <h1
                        className="text-4xl md:text-7xl text-gray-800 mb-6 tracking-tight font-light"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        Train your people
                    </h1>

                    {/* Rotating Word with Pill Background */}
                    <div className="flex justify-center mb-10">
                        <div className="relative inline-block">
                            <div className="bg-blue-100/50 backdrop-blur-sm rounded-full px-10 py-4 border border-white shadow-sm">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={rotatingWords[wordIndex]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="text-4xl md:text-5xl text-blue-800 block tracking-tight font-semibold"
                                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                    >
                                        to{rotatingWords[wordIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p
                        className="text-base sm:text-lg md:text-xl text-slate-900 max-w-xl mx-auto mb-12 leading-relaxed"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        The <span className="font-semibold text-slate-950">#1</span> platform for workplace learning.
                        <br />
                        Everyone says that. We focus on making it come true.
                    </p>

                    {/* CTA Button */}
                    <motion.a
                        href="/contactus"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-3 
                            bg-gradient-to-r from-blue-500 to-blue-600 
                            text-white text-lg md:text-xl 
                            rounded-full shadow-lg hover:shadow-2xl 
                            transition-all duration-300"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        <span>Build Future-Ready Teams</span>
                        <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </motion.a>
                </div>
            </div>

            {/* Below fold - flows naturally based on content */}
            <div className="pb-16">
                <Clientele />
                <Statistics />
            </div>
        </div>
    )
}

export default Hero