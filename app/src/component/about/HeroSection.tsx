'use client'

import { motion } from 'motion/react'

const HeroSection = () => {
  return (
    <section className='relative bg-white h-full '>
      <div className="min-h-[80vh] flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/about/hero.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    </section>
  )
}

export default HeroSection
