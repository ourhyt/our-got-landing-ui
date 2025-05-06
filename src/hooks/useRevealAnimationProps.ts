'use client'

import { useEffect } from 'react'
import { useAnimation, AnimationControls } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export type Direction = 'up' | 'down' | 'left' | 'right'

interface UseRevealAnimationProps {
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
}

export function useRevealAnimation({
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
}: UseRevealAnimationProps): {
  ref: (node?: Element | null) => void
  animation: {
    initial: string
    animate: AnimationControls
    variants: Record<string, any>
    transition: {
      duration: number
      delay: number
      ease: string
    }
  }
} {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [inView, controls])

  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 }
      case 'down':
        return { opacity: 0, y: -30 }
      case 'left':
        return { opacity: 0, x: 30 }
      case 'right':
        return { opacity: 0, x: -30 }
      default:
        return { opacity: 0 }
    }
  }

  return {
    ref,
    animation: {
      initial: 'hidden',
      animate: controls,
      variants: {
        hidden: getInitial(),
        visible: { opacity: 1, x: 0, y: 0 },
      },
      transition: { duration, delay, ease: 'easeOut' },
    },
  }
}