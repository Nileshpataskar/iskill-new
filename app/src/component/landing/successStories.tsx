/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { successStories } from '@/app/data/successStoriesData';

gsap.registerPlugin(ScrollTrigger);

type SuccessDataItem = {
    slug: string;
    logo: string;
    description: string;
};

// Map success stories to the format needed for the component
const successData: SuccessDataItem[] = successStories.map((story) => ({
    slug: story.slug,
    logo: story.logo,
    description: story.tagline,
}));

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const SuccessStories = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const groupsRef = useRef<HTMLDivElement[]>([]);

    const groups = useMemo(() => chunkArray(successData, 3), []);
    const SCROLL_VH_PER_GROUP = 0.6;

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            groupsRef.current.forEach((group, index) => {
                if (index === 0) {
                    // First group: visible immediately, fades out when scrolling
                    gsap.set(group, { autoAlpha: 1, y: 0 });

                    gsap.to(group, {
                        autoAlpha: 0,
                        y: -20,
                        ease: 'power2.in',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: `top+=${SCROLL_VH_PER_GROUP * window.innerHeight * 0.7}px top`,
                            end: `top+=${SCROLL_VH_PER_GROUP * window.innerHeight}px top`,
                            scrub: true,
                        },
                    });
                } else {
                    // Other groups: fade in and out on scroll
                    const startIn = (index - 0.3) * SCROLL_VH_PER_GROUP * window.innerHeight;
                    const endIn = index * SCROLL_VH_PER_GROUP * window.innerHeight;
                    const startOut = (index + 0.7) * SCROLL_VH_PER_GROUP * window.innerHeight;
                    const endOut = (index + 1) * SCROLL_VH_PER_GROUP * window.innerHeight;

                    // Fade in
                    gsap.fromTo(
                        group,
                        { autoAlpha: 0, y: 30 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: `top+=${startIn}px top`,
                                end: `top+=${endIn}px top`,
                                scrub: true,
                            },
                        }
                    );

                    // Fade out (except last group)
                    if (index < groups.length - 1) {
                        gsap.to(group, {
                            autoAlpha: 0,
                            y: -20,
                            ease: 'power2.in',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: `top+=${startOut}px top`,
                                end: `top+=${endOut}px top`,
                                scrub: true,
                            },
                        });
                    }
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [groups]);

    const totalHeightVh = (groups.length * SCROLL_VH_PER_GROUP + 0.3) * 100;

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#1FC0F3]"
            style={{
                minHeight: `${totalHeightVh}vh`,
            }}
        >
            <div className="sticky top-0 min-h-screen flex items-center px-4 md:px-8 py-12">
                <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* LEFT */}
                    <div className="flex flex-col justify-center text-center lg:text-left space-y-5">
                        {/* Main Heading */}
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                            style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                        >
                            Success Stories
                        </h2>

                        {/* Description */}
                        <div className="space-y-3">
                            <p
                                className="text-base md:text-lg text-white max-w-md leading-relaxed mx-auto lg:mx-0"
                                style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                            >
                                Behind every milestone is a story of <span className="text-gray-100 font-bold">collaboration</span>, <span className="text-gray-100 font-bold">innovation</span>, and <span className="text-gray-100 font-bold">measurable growth</span>.
                            </p>
                            <p
                                className="text-sm md:text-base text-white max-w-md mx-auto lg:mx-0"
                                style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                            >
                                Explore how iSkillBox helps organizations learn smarter and achieve faster.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-10 pt-2 justify-center lg:justify-start">
                            <div className="flex flex-col items-center lg:items-start">
                                <span
                                    className="text-3xl md:text-4xl font-bold text-white"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    {successData.length}+
                                </span>
                                <span className="text-xs text-white mt-0.5">Success Stories</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <span
                                    className="text-3xl md:text-4xl font-bold text-white"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    100%
                                </span>
                                <span className="text-xs text-white mt-0.5">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Cards */}
                    <div className="relative min-h-[360px]">
                        {groups.map((group, groupIndex) => (
                            <div
                                key={groupIndex}
                                ref={(el) => {
                                    if (el) groupsRef.current[groupIndex] = el;
                                }}
                                className={`absolute inset-0 flex flex-col gap-4 ${groupIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
                            >
                                {group.map((item, idx) => (
                                    <Link
                                        key={`${groupIndex}-${idx}`}
                                        href={`/success-stories/${item.slug}`}
                                        className="block group"
                                    >
                                        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4 border border-gray-100">
                                            {/* Logo */}
                                            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-md flex items-center justify-center p-3 group-hover:shadow-lg transition-shadow duration-300">
                                                <img
                                                    src={item.logo}
                                                    alt="Company logo"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <p
                                                    className="text-sm md:text-base text-gray-700 line-clamp-2"
                                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                                >
                                                    {item.description}
                                                </p>
                                            </div>
                                            {/* Arrow */}
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-500 flex items-center justify-center transition-colors duration-300">
                                                <svg
                                                    className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-[30vh]" />
        </section>
    );
};

export default SuccessStories;
