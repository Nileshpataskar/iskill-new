/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { successStories } from '@/app/data/successStoriesData';

type SuccessDataItem = {
    slug: string;
    logo: string;
    clientName: string;
    description: string;
};

// Map success stories to the format needed for the component
const successData: SuccessDataItem[] = successStories.map((story) => ({
    slug: story.slug,
    logo: story.logo,
    clientName: story.clientName,
    description: story.tagline,
}));

const NewSuccessStories = () => {
    return (
        <section
            className="relative w-full py-20 md:py-28 overflow-hidden bg-linear-to-b from-[#73cfeb] via-[#d4eef5] to-[#fff]"
        >
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-14">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-sm"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        Success Stories
                    </h2>

                    <p
                        className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        Behind every milestone is a story of collaboration, innovation, and measurable growth.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 cursor-default">
                            <span className="text-lg md:text-xl font-bold text-cyan-600">
                                {successData.length}+
                            </span>
                            <span className="text-sm text-slate-600">Success Stories</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 cursor-default">
                            <span className="text-lg md:text-xl font-bold text-cyan-600">
                                100%
                            </span>
                            <span className="text-sm text-slate-500">Client Satisfaction</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {successData.map((item, idx) => (
                        <Link
                            key={idx}
                            href={`/success-stories/${item.slug}`}
                            className="block group"
                        >
                            <div
                                className="relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-400 ease-out h-full flex flex-col overflow-hidden group-hover:-translate-y-1 border-2 border-transparent hover:border-cyan-400/60"
                                style={{
                                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)',
                                }}
                            >
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="mb-4 w-full">
                                    <div
                                        className="h-[72px] w-full rounded-xl flex items-center justify-start px-5 transition-all duration-400 relative overflow-hidden"
                                        style={{
                                            background: 'linear-gradient(135deg, #1e293b 0%, #334155 60%, #475569 100%)',
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                                        <img
                                            src={item.logo}
                                            alt={`${item.clientName} logo`}
                                            className="h-9 md:h-10 w-auto object-contain max-w-[150px] relative z-10"
                                        />
                                    </div>
                                </div>

                                <p
                                    className="text-sm text-slate-600 leading-relaxed grow mb-4"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                                    <div className="flex items-center gap-1.5 text-cyan-600 group-hover:text-cyan-500 transition-colors duration-300">
                                        <span className="text-sm font-medium">View Case Study</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-cyan-500 flex items-center justify-center transition-all duration-300">
                                        <svg
                                            className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewSuccessStories;
