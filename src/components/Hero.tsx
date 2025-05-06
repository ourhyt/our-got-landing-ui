'use client'

import { Reveal } from '@/components/utils/Reveal'

export function HeroSection() {
  return (
    <section className="h-[100dvh] flex flex-col justify-center items-center text-center bg-black text-white px-4">
      <Reveal>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase font-sans">
          OURHYT
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-zinc-400 mt-4 text-lg md:text-xl font-light font-sans">
          Cultura Melodic y Peak Techno hecha en Colombia
        </p>
      </Reveal>
    </section>
  )
}