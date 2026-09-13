import { useEffect } from 'react'
import './BounceCards.css'

interface BounceCardsProps {
  className?: string
  selector?: string
  animationDelay?: number
  animationStagger?: number
  easeType?: string
  enableHover?: boolean
}

export default function BounceCards({
  className = '',
  selector = '.service-card',
  animationDelay = 0.2,
  animationStagger = 0.08,
  easeType = 'elastic.out(1, 0.6)',
  enableHover = true,
}: BounceCardsProps) {
  useEffect(() => {
    let cancelled = false
    let cleanup: (() => void) | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      if (cancelled) return

      const cards = gsap.utils.toArray<HTMLElement>(selector)
      if (!cards.length) return

      gsap.set(cards, {
        transformOrigin: '50% 50%',
        willChange: 'transform, opacity',
      })

      gsap.fromTo(
        cards,
        { autoAlpha: 0, scale: 0.88, y: 28 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          stagger: animationStagger,
          delay: animationDelay,
          ease: easeType,
          overwrite: 'auto',
        },
      )

      if (!enableHover) {
        cleanup = () => gsap.killTweensOf(cards)
        return
      }

      const handlers = cards.map((card) => {
        const handleEnter = () => {
          gsap.killTweensOf(card)
          gsap.to(card, {
            y: -8,
            scale: 1.018,
            duration: 0.45,
            ease: 'back.out(1.6)',
            overwrite: 'auto',
          })
          card.style.zIndex = '5'
        }

        const handleLeave = () => {
          gsap.killTweensOf(card)
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.3)',
            overwrite: 'auto',
          })
          card.style.zIndex = ''
        }

        card.addEventListener('mouseenter', handleEnter)
        card.addEventListener('mouseleave', handleLeave)

        return () => {
          card.removeEventListener('mouseenter', handleEnter)
          card.removeEventListener('mouseleave', handleLeave)
          card.style.zIndex = ''
        }
      })

      cleanup = () => {
        gsap.killTweensOf(cards)
        handlers.forEach((remove) => remove())
      }
    }

    void init()

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [selector, animationDelay, animationStagger, easeType, enableHover, className])

  return null
}
