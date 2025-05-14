'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Music2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrolled } from '@/hooks/useScrolled'

export function Navbar() {
  const scrolled = useScrolled(300)
  
  return (
    <header
      className={`sticky top-0 z-50 h-16 backdrop-blur-md ${
        scrolled ? 'bg-black/80 border-b border-white/10' : 'bg-black border-b border-transparent'
      }`}
      style={{
        transition: 'none',
        willChange: 'background-color, border-color'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wider">
          <Link 
            href="#sets" 
            className="text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            MIXES
          </Link>
          <Link 
            href="#eventos" 
            className="text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Eventos
          </Link>
        </nav>
        <div className="flex-1 flex justify-center">
          <Link href="#hero">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative"
            >
              <Image
                src="/images/our-32x32.png"
                alt="Ourhyt logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div className="absolute inset-0 bg-zinc-900/20 blur-sm" />
            </motion.div>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="#posts" 
            className="text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Posts
          </Link>
          <button 
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
              })
            }}
            className="text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Contactanos
          </button>
          <div className="flex items-center space-x-6 pl-4 border-l border-zinc-800">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link 
              href="https://tiktok.com" 
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <Music2 className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}