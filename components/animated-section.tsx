"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  const getAnimationClass = () => {
    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-10"
        case "fade-in":
          return "opacity-0"
        case "slide-in-left":
          return "opacity-0 -translate-x-10"
        case "slide-in-right":
          return "opacity-0 translate-x-10"
        case "zoom-in":
          return "opacity-0 scale-95"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100"
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}

