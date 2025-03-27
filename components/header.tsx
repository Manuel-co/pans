"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Trigger header animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 relative">
            <Image
              src="/images/logo.png"
              alt="PANS UNIPORT Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 40px, 40px"
            />
          </div>
          <span
            className={`text-xl font-bold transition-colors duration-300 ${scrolled || isMenuOpen ? "text-pansblue-900" : "text-white"}`}
          >
            PANS UNIPORT
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {["Home", "About", "Events", "Officials", "Contact"].map((item, index) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-sm font-medium transition-all duration-300 ${
                scrolled ? "text-gray-800 hover:text-pansblue-700" : "text-white hover:text-blue-100"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/join">
            <Button
              className={`transition-all duration-300 ${
                scrolled ? "bg-pansblue-900 hover:bg-pansblue-800" : "bg-white text-pansblue-900 hover:bg-gray-100"
              }`}
            >
              Join PANS
            </Button>
          </Link>
        </div>
        <Button
          // variant={scrolled || isMenuOpen ? "ghost" : "outline"}
          size="icon"
          className={`md:hidden transition-all duration-300 ${!scrolled && !isMenuOpen ? "text-white border-white hover:bg-white/10" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t py-4 px-6 bg-white">
          <nav className="flex flex-col gap-4">
            {["Home", "About", "Events", "Officials", "Gallery", "Contact"].map((item, index) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-pansblue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item}
              </Link>
            ))}
            <Link href="/join" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-pansblue-900 hover:bg-pansblue-800 transition-all duration-300">
                Join PANS
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

