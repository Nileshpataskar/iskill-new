'use client'

import { motion } from 'motion/react'

const HeroSection = () => {
  return (
    <section className='relative bg-white h-full '>

    <div 
      className="min-h-[80vh] flex items-center"
      style={{
        backgroundImage: 'url(/about/hero.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
    </div>
    </section>

  )
}

export default HeroSection
