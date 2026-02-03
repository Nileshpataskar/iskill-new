"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "@/app/data/testimonialData";

// Function to get initials from name
const getInitials = (name: string): string => {
    const cleanName = name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s*/i, '').trim();
    const parts = cleanName.split(/\s+/);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    } else if (parts.length === 1) {
        return parts[0].substring(0, 2).toUpperCase();
    }
    return '??';
};

const NewOutcome = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (swiperRef.current) {
            swiperRef.current.update();
        }
    }, []);

    return (
        <section
            className="relative w-full py-16 md:py-20 overflow-hidden bg-linear-to-b from-[#fff] via-[#d4eef5] to-[#73cfeb]"
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-40"
                    style={{ background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
                    style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full mb-5 border border-cyan-200/50 shadow-sm">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-cyan-700">Client Testimonials</span>
                    </div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        <span className="text-slate-800">Outcomes in their </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ background: 'linear-gradient(135deg, #0891B2 0%, #22D3EE 100%)', WebkitBackgroundClip: 'text' }}
                        >
                            Own Words
                        </span>
                    </h2>
                    <p className="text-slate-600 mt-4 max-w-lg mx-auto text-base md:text-lg">
                        Hear what our clients have to say about their transformation journey.
                    </p>
                </div>

                {/* Single Card Carousel */}
                {isClient && (
                    <div className="relative">
                        <Swiper
                            className="outcome-swiper-single"
                            modules={[Navigation, Pagination]}
                            navigation={{
                                prevEl: '.outcome-prev-btn',
                                nextEl: '.outcome-next-btn',
                            }}
                            pagination={{
                                el: '.outcome-pagination',
                                clickable: true,
                                renderBullet: (index, className) => {
                                    return `<span class="${className}"></span>`;
                                },
                            }}
                            loop={true}
                            spaceBetween={40}
                            slidesPerView={1}
                            centeredSlides={true}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {testimonials.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="px-2 md:px-4">
                                        <div
                                            className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-10 lg:p-12 mx-auto max-w-3xl border border-white/80 overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
                                            style={{
                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 12px 40px rgba(6, 182, 212, 0.15), 0 0 0 1px rgba(255,255,255,0.8)',
                                            }}
                                        >
                                            {/* Top accent line */}
                                            <div
                                                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                                style={{ background: 'linear-gradient(90deg, #22D3EE 0%, #0EA5E9 50%, #0891B2 100%)' }}
                                            />

                                            {/* Background decorative quote */}
                                            <div className="absolute top-4 right-4 opacity-5">
                                                <svg className="w-32 h-32 text-cyan-600" viewBox="0 0 48 48" fill="currentColor">
                                                    <path d="M12 24c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-6.6-5.4-12-12-12v4c4.4 0 8 3.6 8 8h-8zm20 0c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-6.6-5.4-12-12-12v4c4.4 0 8 3.6 8 8h-8z" />
                                                </svg>
                                            </div>

                                            {/* Quote Icon */}
                                            <div className="mb-6 relative z-10">
                                                <div
                                                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                                                    style={{ background: 'linear-gradient(135deg, #22D3EE 0%, #0EA5E9 100%)' }}
                                                >
                                                    <svg
                                                        className="w-7 h-7 text-white"
                                                        viewBox="0 0 48 48"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 24c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-6.6-5.4-12-12-12v4c4.4 0 8 3.6 8 8h-8zm20 0c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-6.6-5.4-12-12-12v4c4.4 0 8 3.6 8 8h-8z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Testimonial Text */}
                                            <p
                                                className="text-slate-700 leading-relaxed text-base md:text-lg lg:text-xl mb-8 relative z-10"
                                                style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                            >
                                                &ldquo;{item.text}&rdquo;
                                            </p>

                                            {/* Author Section */}
                                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100 relative z-10">
                                                {/* Avatar */}
                                                <div
                                                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg"
                                                    style={{
                                                        background: 'linear-gradient(135deg, #22D3EE 0%, #0EA5E9 100%)',
                                                        boxShadow: '0 4px 12px rgba(34, 211, 238, 0.4)',
                                                    }}
                                                >
                                                    <span className="text-white font-bold text-base">
                                                        {getInitials(item.author)}
                                                    </span>
                                                </div>
                                                {/* Info */}
                                                <div>
                                                    <p
                                                        className="font-semibold text-slate-800 text-base md:text-lg"
                                                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                                    >
                                                        {item.author}
                                                    </p>
                                                    <p className="text-sm text-slate-500">
                                                        {item.designation}
                                                    </p>
                                                    {item.company && (
                                                        <p className="text-sm text-cyan-600 font-semibold">
                                                            {item.company}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation with Pagination in center */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            {/* Previous Button */}
                            <button
                                className="outcome-prev-btn w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer shadow-lg hover:shadow-cyan-200/50"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Pagination Dots */}
                            <div className="outcome-pagination flex items-center gap-2 px-4"></div>

                            {/* Next Button */}
                            <button
                                className="outcome-next-btn w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer shadow-lg hover:shadow-cyan-200/50"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
                .outcome-swiper-single .swiper-slide {
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .outcome-swiper-single .swiper-slide-active {
                    opacity: 1;
                }
                .outcome-pagination {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .outcome-pagination .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: rgba(255, 255, 255, 0.8);
                    border: 2px solid #22D3EE;
                    border-radius: 50%;
                    opacity: 1;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .outcome-pagination .swiper-pagination-bullet-active {
                    background: #22D3EE;
                    width: 32px;
                    border-radius: 5px;
                    border-color: #22D3EE;
                }
            `}</style>
        </section>
    );
};

export default NewOutcome;
