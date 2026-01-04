'use client';

import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CompanyCard from '../companyCard';

gsap.registerPlugin(ScrollTrigger);

const successData = [
    { logo: '/landing/success/Group 362.png', description: 'Reimagined workforce training using AI-led solutions for one of India\'s largest infrastructure companies.' },
    { logo: '/landing/success/image 11.png', description: 'Building people capability through a long-term learning partnership.' },
    { logo: '/landing/success/image 12.png', description: 'Strengthening full-stack engineering skills for a global workforce.' },
    { logo: '/landing/success/image 13.png', description: 'Strengthening leadership capability for managerial excellence.' },
    { logo: '/landing/success/image 16.png', description: 'Enhancing organizational capabilities through comprehensive learning solutions.' },
    { logo: '/landing/success/image 17.png', description: 'Scaling Data Engineering Hiring Through Interview-as-a-Service.' },
    { logo: '/landing/success/image 18.png', description: 'Driving Communication Excellence Through Generative AI Functional Training.' },
    { logo: '/landing/success/image 19.png', description: 'Delivered a custom LMS built for scale, speed, and smart reporting redefining L&D.' },
    { logo: '/landing/success/image 20.png', description: 'Enabling Leadership Growth at Scale Through Coaching.' },
];

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
    const SCROLL_VH_PER_GROUP = 1.5;
    const EXTRA_SCROLL_VH = 1.2;

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            groupsRef.current.forEach((group, index) => {
                const start = index * SCROLL_VH_PER_GROUP * window.innerHeight;
                const end = (index + 1) * SCROLL_VH_PER_GROUP * window.innerHeight;

                gsap.fromTo(
                    group,
                    { autoAlpha: 0, y: 50 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: `top+=${start}px top`,
                            end: `top+=${end}px top`,
                            scrub: true,
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [groups]);

    const totalHeightVh =
        (groups.length * SCROLL_VH_PER_GROUP + EXTRA_SCROLL_VH) * 100;

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#1d2a4a] bg-top bg-no-repeat -mt-40"
            style={{
                minHeight: `${totalHeightVh}vh`,
                // backgroundImage: 'url(/landing/success-bg.png)'

            }}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="sticky top-0 h-screen flex items-center px-4 md:px-8 z-10">
                <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* LEFT */}
                    <div className="flex flex-col justify-center text-center md:text-left space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 w-fit mx-auto md:mx-0">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-xs font-medium text-white/90 uppercase tracking-wide">Trusted by Leaders</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-5">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                    Success Stories
                                </span>
                            </h2>
                            <div className="w-24 h-1.5 bg-linear-to-r from-blue-400 via-purple-500 to-blue-400 rounded-full mx-auto md:mx-0"></div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
                                Behind every milestone is a story of <span className="text-white font-semibold">collaboration</span>, <span className="text-white font-semibold">innovation</span>, and <span className="text-white font-semibold">measurable growth</span>.
                            </p>
                            <p className="text-base text-white/70 max-w-lg">
                                Explore how iSkillBox helps organizations learn smarter and achieve faster.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-2 justify-center md:justify-start">
                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-bold text-white">15+</span>
                                <span className="text-sm text-white/70 mt-1">Success Stories</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-bold text-white">100%</span>
                                <span className="text-sm text-white/70 mt-1">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative min-h-[420px]">
                        {groups.map((group, groupIndex) => (
                            <div
                                key={groupIndex}
                                ref={(el) => {
                                    if (el) groupsRef.current[groupIndex] = el;
                                }}
                                className="absolute inset-0 opacity-0 flex flex-col gap-6"
                            >
                                {group.map((item, idx) => (
                                    <CompanyCard
                                        key={`${groupIndex}-${idx}`}
                                        logo={item.logo}
                                        description={item.description}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Post-animation scroll space */}
            <div className="h-[120vh]" />
        </section>
    );
};

export default SuccessStories;
