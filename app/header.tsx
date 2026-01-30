"use client";

import React, { useState, useRef } from 'react';
import { successStories } from './data/successStoriesData';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

    const solutionsItems = [
        { label: "Skill Gap Analysis", href: "/contactus" },
        { label: "Instructor-Led Training", href: "/contactus" },
        { label: "1:1 & Group Coaching", href: "/contactus" },
        { label: "E-Learning & LMS", href: "/contactus" },
        { label: "Psychometric Assessments", href: "/contactus" },
        { label: "AI-Powered Solutions", href: "/contactus" }
    ];

    const storiesItems = successStories.map(story => ({
        label: story.clientName,
        href: `/success-stories/${story.slug}`
    }));

    const navItems = [
        { href: "/about", label: "About Us" },
        { href: "#", label: "Solutions", dropdownKey: "solutions", items: solutionsItems },
        { href: "#", label: "Success Stories", dropdownKey: "stories", items: storiesItems },
        { href: "/contactus", label: "Contact Us" }
    ];

    const handleMouseEnter = (dropdownKey: string) => {
        if (dropdownTimeout.current) {
            clearTimeout(dropdownTimeout.current);
            dropdownTimeout.current = null;
        }
        setActiveDropdown(dropdownKey);
    };

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    const handleDropdownMouseEnter = () => {
        if (dropdownTimeout.current) {
            clearTimeout(dropdownTimeout.current);
            dropdownTimeout.current = null;
        }
    };

    return (
        <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-50">
            <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg shadow-cyan-100/50 border border-gray-100 relative">
                {/* Gradient bottom border - using inset shadow instead */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent rounded-full" />

                <div className="flex h-14 md:h-16 items-center justify-between px-6 md:px-10">
                    {/* Logo */}
                    <a href="/" className="shrink-0">
                        <img src="/iskillLogo/16.png" alt="iSkillBox" className="h-8 md:h-10" />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.dropdownKey && handleMouseEnter(item.dropdownKey)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    href={item.dropdownKey ? "#" : item.href}
                                    onClick={(e) => item.dropdownKey && e.preventDefault()}
                                    className="text-sm text-gray-700 hover:text-cyan-600 transition-colors font-medium flex items-center gap-1"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    {item.label}
                                    {item.dropdownKey && (
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.dropdownKey ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>

                                {/* Dropdown */}
                                {item.dropdownKey && activeDropdown === item.dropdownKey && (
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 py-3 z-50 max-h-80 overflow-y-auto"
                                        onMouseEnter={handleDropdownMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {/* Arrow */}
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

                                        <div className="relative">
                                            {item.items?.map((subItem, idx) => (
                                                <a
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block px-5 py-2.5 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50/50 transition-colors border-l-2 border-transparent hover:border-cyan-500 mx-2 rounded-lg"
                                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                                >
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <a
                        href="/contactus"
                        className="hidden md:inline-flex px-4 lg:px-5 py-2 lg:py-2.5 text-sm font-medium text-cyan-600 border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                        style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                    >
                        Talk to Our Team
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45' : ''}`} />
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Outside the rounded container */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <nav className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <button
                                    onClick={() => {
                                        if (item.dropdownKey) {
                                            setActiveDropdown(activeDropdown === item.dropdownKey ? null : item.dropdownKey);
                                        } else {
                                            window.location.href = item.href;
                                        }
                                    }}
                                    className="w-full flex items-center justify-between py-3 px-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50 font-medium rounded-xl transition-colors"
                                    style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                >
                                    {item.label}
                                    {item.dropdownKey && (
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.dropdownKey ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </button>

                                {/* Mobile Dropdown */}
                                {item.dropdownKey && activeDropdown === item.dropdownKey && (
                                    <div className="ml-3 mt-1 pl-3 border-l-2 border-cyan-200 space-y-1 max-h-48 overflow-y-auto">
                                        {item.items?.map((subItem) => (
                                            <a
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="block py-2.5 px-3 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50/50 rounded-lg transition-colors"
                                                style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subItem.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Mobile CTA */}
                        <div className="pt-3 mt-3 border-t border-gray-100">
                            <a
                                href="/contactus"
                                className="block py-3 text-center text-cyan-600 border-2 border-cyan-500 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition-colors"
                                style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Talk to Our Team
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
