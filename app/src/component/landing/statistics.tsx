'use client'
import { motion } from "motion/react";

const stats = [
    {
        number: "12+",
        description: "Years of pioneering learning innovation",
        icon: (
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        number: "16,000+",
        description: "professionals empowered each year",
        icon: (
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        number: "10,000+",
        description: "subject-matter specialists in our expert ecosystem",
        icon: (
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        number: "500+",
        description: "industry-leading clients across sectors",
        icon: (
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        number: "2,000+",
        description: "high-impact live learning interventions annually",
        icon: (
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
];

const Statistics = () => {
    return (
        <section className="w-full py-16 md:py-24 ">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="text-2xl sm:text-3xl  text-gray-700 font-light tracking-tight"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        Learn Better, Faster, Smarter with
                    </h2>
                    <h3
                        className="text-2xl sm:text-3xl  text-blue-600 font-semibold tracking-tight mt-1"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        iSkillBox L&D Solutions
                    </h3>
                </div>

                {/* Stats Grid - First Row (3 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                    {stats.slice(0, 3).map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start justify-between gap-4"
                        >
                            <div className="flex-1">
                                <h4
                                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    {stat.number}
                                </h4>
                                <p
                                    className="text-sm md:text-base text-gray-600"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    {stat.description}
                                </p>
                            </div>
                            <div className="flex-shrink-0 opacity-70">
                                {stat.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Grid - Second Row (2 cards centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                    {stats.slice(3).map((stat, index) => (
                        <motion.div
                            key={index + 3}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start justify-between gap-4"
                        >
                            <div className="flex-1">
                                <h4
                                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    {stat.number}
                                </h4>
                                <p
                                    className="text-sm md:text-base text-gray-600"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    {stat.description}
                                </p>
                            </div>
                            <div className="flex-shrink-0 opacity-70">
                                {stat.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;