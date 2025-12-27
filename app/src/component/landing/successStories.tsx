import CompanyCard from "../companyCard";

const successData = [
    {
        logo: "/landing/company/fiat.png",
        description:
            "Streamlined complex SOPs into engaging Level 3 eLearning modules to align teams across FIAT’s operations.",
    },
    {
        logo: "/landing/company/gmr.png",
        description:
            "Reimagined workforce training using AI-led solutions for one of India's largest infrastructure companies.",
        bg: "bg-white/20",
    },
    {
        logo: "/landing/company/aequs.png",
        description:
            "Delivered a custom LMS built for scale, speed, and smart reporting redefining L&D for Aequs.",
        bg: "bg-white/20",
    },
];

const SuccessStories = () => {
    return (
        <section
            className="relative w-full -mt-72 z-50"
            style={{
                backgroundImage: "url(/landing/success-bg.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
            }}
        >
            <div className="relative max-w-4xl mx-auto py-24 pt-40 text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Success Stories
                </h2>
                <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                    Behind every milestone is a story of collaboration, innovation, and measurable growth.
                    Explore how iSkillBox helps organizations learn smarter and achieve faster.
                </p>
            </div>

            <div className="flex flex-col gap-8 pb-32 w-full justify-center">
                {successData.map((item, idx) => (
                    <CompanyCard
                        key={idx}
                        logo={item.logo}
                        description={item.description}
                    />
                ))}
                <a
                    href="/about"
                    className='inline-flex items-center justify-center text-base md:text-lg font-regular text-lime-300 hover:text-lime-400 transition-colors duration-200 group text-left'
                >
                    Read More Reviews
                    <span className='ml-2 group-hover:translate-x-1 transition-transform duration-200'>→</span>
                </a>
            </div>
        </section>
    );
};

export default SuccessStories;
