"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import OutcomeCard from "../OutcomeCard";
import { testimonials } from "@/app/data/testimonialData";


const Outcome = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  
  // Duplicate testimonials to ensure smooth looping in both directions
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-32 pb-32 md:pb-40">

      {/* Top Wave */}
      {/* <img src="/landing/Wave 3.png" className="absolute top-0 left-0 w-full object-cover pointer-events-none" /> */}

      {/* Headline */}
      <div className="text-center mb-16 md:mb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#5B2893]">
          Outcomes in their Own Words
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20">
        <Swiper
          className="outcome-swiper"
          modules={[Navigation]}
          navigation={true}
          loop={true}
          loopAdditionalSlides={testimonials.length}
          watchSlidesProgress={true}
          spaceBetween={40}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={testimonials.length}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { 
              slidesPerView: 1, 
              centeredSlides: true,
              loopAdditionalSlides: testimonials.length,
              initialSlide: testimonials.length
            },
            768: { 
              slidesPerView: 3, 
              centeredSlides: true,
              loopAdditionalSlides: testimonials.length,
              initialSlide: testimonials.length
            },
          }}
        >
          {duplicatedTestimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <OutcomeCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Wave */}
      <img src="/landing/Wave 2.png" className="absolute bottom-0 left-0 w-full object-cover pointer-events-none" />

    </section>
  );
};

export default Outcome;
