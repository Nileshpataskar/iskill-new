import React from 'react'
import Link from 'next/link'
import { Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#161c2d] text-white/90 pb-10">
      <div className="mx-auto max-w-7xl px-6 ">

        {/* Links */}
        <div className="pt-10 flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-20">

          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img src='/iskillLogo/16.png' alt='logo' className='w-40 sm:w-44 md:w-52' />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70 mx-auto md:mx-0">
              Building future‑ready workforces with insights, intelligence and innovation.
            </p>
          </div>

          <div className='flex flex-row justify-center md:justify-end gap-12 sm:gap-16 md:gap-20 lg:gap-28'>

            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white">Company</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link className="hover:text-white transition-colors" href="/about">About Us</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#solutions">Solutions</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#success">Success Stories</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#contact">Contact</Link></li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white">Resources</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Guides</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/60">© {year} iSkillBox. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20" href="#">
              <Linkedin className="h-4 w-4 text-white" />
            </a>
            <a aria-label="Instagram" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20" href="#">
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a aria-label="YouTube" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20" href="#">
              <Youtube className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
