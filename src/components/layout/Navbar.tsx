'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Music2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrolled } from '@/hooks/useScrolled'

export function Navbar() {
  const scrolled = useScrolled(10)
  return (
    <header
  className={`sticky top-0 z-50 h-16 bg-black/80 backdrop-blur-md transition-all duration-300 ${
    scrolled ? 'border-b border-white/10' : 'border-b border-transparent'
  }`}
>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left menu (desktop only) */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white/70">
          <Link href="#releases" className="hover:text-white transition-colors">Releases</Link>
          <Link href="#eventos" className="hover:text-white transition-colors">Events</Link>
        </nav>

        {/* Logo centered */}
        <div className="flex-1 flex justify-center">
          <Link href="#hero">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src="/images/logo/logo-ourhyt.svg"
                alt="Ourhyt logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </motion.div>
          </Link>
        </div>

        {/* Right menu (desktop only) */}
        <div className="hidden md:flex items-center space-x-6 text-white/70">
          <Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          <div className="flex items-center space-x-3">
            <Link href="https://instagram.com" target="_blank"><Instagram className="w-5 h-5 hover:text-white transition-colors" /></Link>
            <Link href="https://facebook.com" target="_blank"><Facebook className="w-5 h-5 hover:text-white transition-colors" /></Link>
            <Link href="https://tiktok.com" target="_blank"><Music2 className="w-5 h-5 hover:text-white transition-colors" /></Link>
          </div>
        </div>
      </div>
    </header>
  )
}