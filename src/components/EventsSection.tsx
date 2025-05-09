'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRevealAnimation } from '@/hooks/useRevealAnimationProps'

const events = [
  {
    id: 1,
    title: "Ourhyt Invites: Melodic Takeover",
    date: "15 Junio 2025",
    location: "Medellín, Colombia",
    imageUrl: "/images/events/our-event-1.jpg",
    ticketUrl: "https://ourhyt.com/tickets/melodic",
    isPast: false,
    country: "Colombia"
  },
  {
    id: 2,
    title: "Peak Time Techno Night",
    date: "22 Junio 2025",
    location: "Bogotá, Colombia",
    imageUrl: "/images/events/our-event-2.jpg",
    ticketUrl: "https://ourhyt.com/tickets/peak-time",
    isPast: false,
    country: "Colombia"
  },
  {
    id: 3,
    title: "Melodic Journey",
    date: "10 Mayo 2025",
    location: "Cali, Colombia",
    imageUrl: "/images/events/our-event-3.jpg",
    ticketUrl: "https://ourhyt.com/tickets/melodic-journey",
    isPast: true,
    country: "Colombia"
  },
  {
    id: 4,
    title: "Underground Sessions",
    date: "5 Mayo 2025",
    location: "Medellín, Colombia",
    imageUrl: "/images/events/our-event-4.jpg",
    ticketUrl: "https://ourhyt.com/tickets/underground",
    isPast: true,
    country: "Colombia"
  }
]

export function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'colombia'>('upcoming')

  const filteredEvents = events.filter(event => {
    if (activeTab === 'upcoming') return !event.isPast
    if (activeTab === 'past') return event.isPast
    return event.country === 'Colombia'
  })

  const titleAnimation = useRevealAnimation({
    direction: 'up',
    duration: 0.8,
    delay: 0.2
  })

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredEvents.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length)
  }

  return (
    <section id="eventos" className="relative min-h-screen bg-black py-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.15] mix-blend-overlay" />

      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col">
        <motion.div {...titleAnimation.animation} ref={titleAnimation.ref} className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-4">
            Eventos
          </h2>
          <div className="flex justify-center space-x-4">
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'outline'}
              onClick={() => setActiveTab('upcoming')}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              Próximos
            </Button>
            <Button
              variant={activeTab === 'past' ? 'default' : 'outline'}
              onClick={() => setActiveTab('past')}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              Pasados
            </Button>
            <Button
              variant={activeTab === 'colombia' ? 'default' : 'outline'}
              onClick={() => setActiveTab('colombia')}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              Colombia
            </Button>
          </div>
        </motion.div>

        <div className="relative flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-xl mx-auto aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src={filteredEvents[currentIndex].imageUrl}
                alt={filteredEvents[currentIndex].title}
                className="w-full h-full object-contain bg-black"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white mb-2">
                  {filteredEvents[currentIndex].title}
                </h3>
                <p className="text-zinc-300 font-medium mb-4">
                  {filteredEvents[currentIndex].date} • {filteredEvents[currentIndex].location}
                </p>
                {!filteredEvents[currentIndex].isPast && (
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-zinc-200 font-bold tracking-tight"
                  >
                    <a href={filteredEvents[currentIndex].ticketUrl} target="_blank" rel="noopener noreferrer">
                      Comprar Entrada
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2">
            {filteredEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}