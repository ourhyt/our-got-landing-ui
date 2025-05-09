'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import { useRevealAnimation } from '@/hooks/useRevealAnimationProps'

export function HeroSection() {
  const titleAnimation = useRevealAnimation({
    direction: 'up',
    duration: 0.8,
    delay: 0.2
  })

  const subtitleAnimation = useRevealAnimation({
    direction: 'up',
    duration: 0.8,
    delay: 0.4
  })

  const buttonsAnimation = useRevealAnimation({
    direction: 'up',
    duration: 0.8,
    delay: 0.6
  })

  return (
    <section className="relative h-[100dvh] flex flex-col justify-center items-center text-center bg-black text-white px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.15] mix-blend-overlay" />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-red-500/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-zinc-800/20 blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10">
        <motion.div {...titleAnimation.animation} ref={titleAnimation.ref}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase font-sans text-white">
            OURHYT
          </h1>
        </motion.div>

        <motion.div {...subtitleAnimation.animation} ref={subtitleAnimation.ref}>
          <p className="text-zinc-400 mt-6 text-xl md:text-2xl font-light font-sans max-w-2xl mx-auto tracking-wider">
            CULTURA MELODIC & PEAK TIME TECHNO
          </p>
        </motion.div>

        <motion.div {...buttonsAnimation.animation} ref={buttonsAnimation.ref}>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all duration-300"
            >
              RELEASES
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zinc-800 text-zinc-400 hover:bg-zinc-900/50 hover:text-white transition-all duration-300"
              onClick={() => {
                window.location.href = '#eventos'
              }}
            >
              EVENTS
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowDown className="w-5 h-5 text-zinc-600" />
      </motion.div>
    </section>
  )
}