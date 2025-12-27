'use client'

import { motion } from 'motion/react'

const HeroSection = () => {
  return (
    <section 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 min-h-[500px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: 'url(/about/hero.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About <span className="text-blue-100">iSkillBox</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            We're on a mission to transform how organizations learn, grow, and succeed in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
