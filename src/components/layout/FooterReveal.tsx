'use client'

import { FacebookIcon, InstagramIcon, Music2, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
export function FooterReveal() {
  return (
    <footer
      id='footer'
      className="fixed left-0 bottom-0 w-full z-0 bg-black border-t border-zinc-800 shadow-2xl"
      style={{ height: 600 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center gap-10">
        <Image src="/images/our-32x32.png" alt="Logo" className="h-14 mb-4" width={46} height={32} />
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-center mb-6">
          ¡PONTE EN CONTACTO!
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#" className="text-zinc-400 hover:text-white transition flex items-center gap-2 text-lg font-medium">
            <InstagramIcon className="w-6 h-6" /> Instagram
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition flex items-center gap-2 text-lg font-medium">
            <FacebookIcon className="w-6 h-6" /> Facebook
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition flex items-center gap-2 text-lg font-medium">
            <Music2 className="w-6 h-6" /> TikTok
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition flex items-center gap-2 text-lg font-medium">
            <YoutubeIcon className="w-6 h-6" /> YouTube
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <span className="block text-zinc-400 mb-1">Booking, Info, Prensa</span>
            <span className="text-white font-bold text-xl tracking-widest">INFO@OURHYT.ART</span>
          </div>
          <div className="text-center">
            <span className="block text-zinc-400 mb-1">Demo</span>
            <span className="text-white font-bold text-xl tracking-widest">DEMO@OURHYT.ART</span>
          </div>
        </div>
        <div className="w-full border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-500 text-xs">Todos los derechos reservados. ourhyt 2025</span>
          <span className="text-zinc-500 text-xs">Desarrollado por: <span className="font-bold">OURHYT</span></span>
        </div>
      </div>
    </footer>
  )
}