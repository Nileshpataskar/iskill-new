"use client"
import ServiceCard from '@/app/src/component/ServiceCard'
import React from 'react'

const ServiceSection = () => {
  const services = [
    {
      image: "/service/skillgap.png",
      title: "Skill Gap Analysis",
      subtitle: "Spot the gaps. Spark the growth.",
      description:
        "We turn performance blind spots into growth opportunities with data-driven diagnostics that map where your teams need to go and how to get them there.",
      link: "#",
    },
    {
      image: "/service/instructor.png",
      title: "Instructor-Led Training",
      subtitle: "Learning with a human edge.",
      description:
        "Our expert-led virtual and in-person training blends industry know-how with real-time interaction designed to drive skill, confidence, and change.",
      link: "#",
    },
    {
      image: "/service/coahing.png",
      title: "1:1 & Group Coaching",
      subtitle: "Coaching that creates momentum.",
      description:
        "From personalized executive coaching to high-impact team sessions we help people lead better, grow faster, and think deeper.",
      link: "#",
    },
    {
      image: "/service/elearn.png",
      title: "eLearning & LMS",
      subtitle: "Content that performs. Platforms that scale.",
      description:
        "We design mobile-first, gamified eLearning paired with a smart LMS so you can track, train, and transform teams at scale.",
      link: "#",
    },
    {
      image: "/service/psycho.png",
      title: "Psychometric Assessments",
      subtitle: "Understand what's beneath the surface.",
      description:
        "We go beyond resumes to decode personality, behavior, and potential so you hire right, lead smart, and build strong teams.",
      link: "#",
    },
  ];

  return (
  <section className="w-full py-16 bg-white px-4 md:px-6 lg:px-8" id="know-more">
  <div className="w-full flex flex-col gap-12">

    {services.map((service) => (
      <div
        key={service.title}
        className="
          w-full
          lg:w-[60%]
          mx-auto
          even:lg:ml-auto
        "
      >
        <ServiceCard {...service} />
      </div>
    ))}

  </div>
</section>

  )
}

export default ServiceSection
