import ServiceCard from '@/app/component/ServiceCard'
import React from 'react'

const ServiceSection = () => {
  // Icon definitions
  const skillGapIcon = (
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      <circle cx="18" cy="6" r="3" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8l-2 2" />
    </svg>
  );

  const instructorIcon = (
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const coachingIcon = (
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const eLearningIcon = (
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const psychometricIcon = (
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  return (
    <section className='w-full bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
      <div className='max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
        <ServiceCard
          image="/service/skillgap.jpg"
          title="Skill Gap Analysis"
          subtitle="Spot the gaps. Spark the growth."
          description="We turn performance blind spots into growth opportunities with data-driven diagnostics that map where your teams need to go and how to get them there."
          link="#"
          icon={skillGapIcon}
        />
        <ServiceCard
          image="/service/instructor.jpg"
          title="Instructor-Led Training"
          subtitle="Learning with a human edge."
          description="Our expert-led virtual and in-person training blends industry know-how with real-time interaction designed to drive skill, confidence, and change."
          link="#"
          icon={instructorIcon}
        />
        <ServiceCard
          image="/service/coahing.jpg"
          title="1:1 & Group Coaching"
          subtitle="Coaching that creates momentum."
          description="From personalized executive coaching to high-impact team sessions we help people lead better, grow faster, and think deeper."
          link="#"
          icon={coachingIcon}
        />
        <ServiceCard
          image="/service/elearn.jpg"
          title="eLearning & LMS"
          subtitle="Content that performs. Platforms that scale."
          description="We design mobile-first, gamified eLearning paired with a smart LMS so you can track, train, and transform teams at scale."
          link="#"
          icon={eLearningIcon}
        />
        <ServiceCard
          image="/service/psycho.jpg"
          title="Psychometric Assessments"
          subtitle="Understand what's beneath the surface."
          description="We go beyond resumes to decode personality, behavior, and potential so you hire right, lead smart, and build strong teams."
          link="#"
          icon={psychometricIcon}
        />
      </div>
    </section>
  )
}

export default ServiceSection