'use client'

import { motion } from 'motion/react'

type Props = {
  svgContent?: string;
}

const HeroSection = ({ svgContent }: Props) => {
  return (
    <section className='relative bg-white h-full '>
      <div className="min-h-[80vh] flex items-center relative overflow-hidden">
        {svgContent ? (
          <div 
            className="absolute inset-0 w-full h-full"
            dangerouslySetInnerHTML={{ 
              __html: svgContent.replace(
                '<svg',
                '<svg style="width: 100%; height: 100%; object-fit: cover;"'
              )
            }} 
          />
        ) : (
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'url(/about/hero.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
      </div>
    </section>
  )
}

export default HeroSection
