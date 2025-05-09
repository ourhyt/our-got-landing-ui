'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Music2, Play } from 'lucide-react'
import { useRevealAnimation } from '@/hooks/useRevealAnimationProps'

const sets = [
  {
    id: 1,
    title: "Set Semanal #1",
    artist: "DJ Underground",
    date: "15 Junio 2024",
    soundcloudUrl: "https://soundcloud.com/amelielens/amelie-lens-radio-show-006",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https://soundcloud.com/amelielens/amelie-lens-radio-show-006&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    imageUrl: "/images/sets/set-1.jpg",
    category: "weekly",
    duration: "1:30:00"
  },
  {
    id: 2,
    title: "Clásicos del Techno",
    artist: "DJ Legend",
    date: "10 Junio 2024",
    soundcloudUrl: "https://soundcloud.com/example/set-2",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/example/set-2&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    imageUrl: "/images/sets/set-2.jpg",
    category: "classic",
    duration: "2:15:00"
  },
  {
    id: 3,
    title: "Set Semanal #2",
    artist: "DJ Future",
    date: "8 Junio 2024",
    soundcloudUrl: "https://soundcloud.com/example/set-3",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/example/set-3&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    imageUrl: "/images/sets/set-3.jpg",
    category: "weekly",
    duration: "1:45:00"
  },
  {
    id: 4,
    title: "Underground Sessions",
    artist: "DJ Deep",
    date: "5 Junio 2024",
    soundcloudUrl: "https://soundcloud.com/example/set-4",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/example/set-4&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    imageUrl: "/images/sets/set-4.jpg",
    category: "classic",
    duration: "2:00:00"
  }
]

export function SetsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'weekly' | 'classic'>('weekly')

  const filteredSets = sets.filter(set => set.category === activeTab)

  const titleAnimation = useRevealAnimation({
    direction: 'up',
    duration: 0.8,
    delay: 0.2
  })

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredSets.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredSets.length) % filteredSets.length)
  }

  return (
    <section id="sets" className="relative min-h-screen bg-zinc-950 py-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.15] mix-blend-overlay" />

      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col">
        <motion.div {...titleAnimation.animation} ref={titleAnimation.ref} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-4">
            Sets
          </h2>
          <div className="flex justify-center space-x-4">
            <Button
              variant={activeTab === 'weekly' ? 'default' : 'outline'}
              onClick={() => setActiveTab('weekly')}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              Semanales
            </Button>
            <Button
              variant={activeTab === 'classic' ? 'default' : 'outline'}
              onClick={() => setActiveTab('classic')}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              Clásicos
            </Button>
          </div>
        </motion.div>

        <div className="relative flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-white mb-4">
                    {filteredSets[currentIndex].title}
                  </h3>
                  <p className="text-zinc-400 text-xl font-medium mb-2">
                    {filteredSets[currentIndex].artist}
                  </p>
                  <div className="flex items-center space-x-4 text-zinc-500">
                    <p>{filteredSets[currentIndex].date}</p>
                    <span>•</span>
                    <p>{filteredSets[currentIndex].duration}</p>
                  </div>
                </div>
                
                <Button
                  asChild
                  className="bg-white text-black hover:bg-zinc-200 font-bold tracking-tight w-full"
                >
                  <a href={filteredSets[currentIndex].soundcloudUrl} target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" />
                    Escuchar en SoundCloud
                  </a>
                </Button>
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900">
                <iframe
                  width="100%"
                  height="100%"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={filteredSets[currentIndex].soundcloudEmbedUrl}
                  className="rounded-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-900/50 hover:bg-zinc-900/80 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-900/50 hover:bg-zinc-900/80 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2">
            {filteredSets.map((_, index) => (
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
