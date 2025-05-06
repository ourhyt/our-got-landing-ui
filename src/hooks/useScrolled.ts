'use client'

import { useEffect, useState, useRef } from 'react'

export function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Crear un elemento invisible para observar
    const sentinel = document.createElement('div')
    sentinel.style.position = 'absolute'
    sentinel.style.top = `${threshold}px`
    sentinel.style.left = '0'
    sentinel.style.width = '100%'
    sentinel.style.height = '1px'
    sentinel.style.pointerEvents = 'none'
    document.body.appendChild(sentinel)

    // Configurar el observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    )

    observerRef.current.observe(sentinel)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      document.body.removeChild(sentinel)
    }
  }, [threshold])

  return scrolled
}