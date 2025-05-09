'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useRevealAnimation } from '@/hooks/useRevealAnimationProps'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const posts = [
  {
    id: 1,
    title: "El Resurgimiento del Techno en Latinoamérica",
    description: "Exploramos cómo la escena techno está creciendo exponencialmente en Latinoamérica, con un enfoque especial en Colombia y sus nuevos talentos.",
    date: "15 Junio 2024",
    imageUrl: "/images/posts/post-1.jpg",
    category: "Noticias"
  },
  {
    id: 2,
    title: "Entrevista: El Futuro del Melodic Techno",
    description: "Charlamos con los principales exponentes del melodic techno sobre las tendencias emergentes y el futuro del género en la escena underground.",
    date: "12 Junio 2024",
    imageUrl: "/images/posts/post-2.jpg",
    category: "Entrevistas"
  },
  {
    id: 3,
    title: "Guía: Equipamiento para DJs Principiantes",
    description: "Una guía completa sobre el equipamiento esencial para comenzar tu carrera como DJ, desde controladores hasta software recomendado.",
    date: "10 Junio 2024",
    imageUrl: "/images/posts/post-3.jpg",
    category: "Guías"
  },
  {
    id: 4,
    title: "Guía: Equipamiento para DJs Principiantes",
    description: "Una guía completa sobre el equipamiento esencial para comenzar tu carrera como DJ, desde controladores hasta software recomendado.",
    date: "10 Junio 2024",
    imageUrl: "/images/posts/post-3.jpg",
    category: "Guías"
  },
  {
    id: 5,
    title: "Guía: Equipamiento para DJs Principiantes",
    description: "Una guía completa sobre el equipamiento esencial para comenzar tu carrera como DJ, desde controladores hasta software recomendado.",
    date: "10 Junio 2024",
    imageUrl: "/images/posts/post-3.jpg",
    category: "Guías"
  },
  {
    id: 6,
    title: "Guía: Equipamiento para DJs Principiantes",
    description: "Una guía completa sobre el equipamiento esencial para comenzar tu carrera como DJ, desde controladores hasta software recomendado.",
    date: "10 Junio 2024",
    imageUrl: "/images/posts/post-3.jpg",
    category: "Guías"
  },
  {
    id: 7,
    title: "Guía: Equipamiento para DJs Principiantes",
    description: "Una guía completa sobre el equipamiento esencial para comenzar tu carrera como DJ, desde controladores hasta software recomendado.",
    date: "10 Junio 2024",
    imageUrl: "/images/posts/post-3.jpg",
    category: "Guías"
  }
]

const POSTS_PER_PAGE = 3

export function PostsSection() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = posts.slice(startIndex, endIndex)

  const titleAnimation = useRevealAnimation({
    direction: 'up',
    duration: 0.8,
    delay: 0.2
  })

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.05,
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const itemAnimation = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const handlePostClick = (postId: number) => {
    router.push(`/posts/${postId}`)
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  return (
    <section ref={sectionRef} id="posts" className="relative min-h-screen bg-zinc-950 py-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.15] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...titleAnimation.animation} ref={titleAnimation.ref} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-4">
            Blog
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Descubre las últimas noticias, entrevistas y guías del mundo del techno underground
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {currentPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemAnimation}
                onClick={() => handlePostClick(post.id)}
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:ring-1 hover:ring-white/20"
                layout
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                    {post.description}
                  </p>

                  <Button
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePostClick(post.id)
                    }}
                    className="bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-zinc-400 hover:text-white disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "ghost"}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 p-0 ${
                  page === currentPage
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-zinc-400 hover:text-white disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
} 