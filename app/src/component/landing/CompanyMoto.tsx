import CompanyCard from "../companyCard";

const CompanyMoto = () => {
    return (
        <section className="w-full bg-white">

            <div className='relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto gap-6 md:gap-12 lg:gap-16 px-4 md:px-6 lg:px-8 pb-40'>

                <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
                    <div className='max-w-xl'>
                        <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Think of us as your L&D co-pilot
                        </h1>
                        <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                            The one who knows how to turn complex training into simple, scalable success.
                            At iSkillBox, we combine AI-powered tools with people-powered ideas to make learning
                            effective, measurable, and refreshingly engaging. <br /><br />
                            We’re here to help you build teams that don’t just adapt to the future — they define it.
                        </p>
                    </div>
                </div>

                <div className='w-full md:w-1/2'>
                    <img
                        src="/landing/company-moto-girl.png"
                        alt="Professionals"
                        className='w-full h-full object-cover z-10'
                    />
                </div>
            </div>
 </section>
    );
};

export default CompanyMoto;
