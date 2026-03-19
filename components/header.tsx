"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Events",    href: "/events" },
  { label: "Officials", href: "/officials" },
  { label: "Gallery",   href: "/gallery" },
  { label: "Contact",   href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [visible,    setVisible]    = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    const t = setTimeout(() => setVisible(true), 200)
    return () => { window.removeEventListener("scroll", onScroll); clearTimeout(t) }
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const solidBg = scrolled || isMenuOpen

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 w-full
          transition-all duration-500 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
          ${solidBg
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"}
        `}
      >
        <div className="container flex h-16 md:h-18 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative h-9 w-9 rounded-lg overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="PANS UNIPORT Logo"
                fill
                className="object-contain"
                priority
                sizes="36px"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-sm font-bold tracking-wide transition-colors duration-300 font-display ${
                  solidBg ? "text-pansblue-900" : "text-white"
                }`}
              >
                PANS UNIPORT
              </span>
              <span
                className={`text-[10px] font-medium transition-colors duration-300 ${
                  solidBg ? "text-pansblue-600" : "text-blue-200"
                }`}
              >
                Faculty of Pharmaceutical Sciences
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ transitionDelay: `${i * 30}ms` }}
                className={`
                  relative px-3.5 py-2 text-sm font-medium rounded-lg
                  transition-all duration-200
                  after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-[2px]
                  after:rounded-full after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${solidBg
                    ? "text-gray-700 hover:text-pansblue-900 hover:bg-blue-50 after:bg-pansblue-600"
                    : "text-white/90 hover:text-white hover:bg-white/10 after:bg-white"}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/join">
              <Button
                className={`
                  h-9 px-5 text-sm font-semibold rounded-lg transition-all duration-300
                  ${solidBg
                    ? "bg-pansblue-900 text-white hover:bg-pansblue-800 shadow-md shadow-pansblue-900/20"
                    : "bg-white text-pansblue-900 hover:bg-blue-50 shadow-md shadow-black/10"}
                `}
              >
                Join PANS
                <ChevronRight className="h-3.5 w-3.5 -mr-1 ml-0.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className={`
              lg:hidden relative z-10 p-2 rounded-lg transition-all duration-200
              ${solidBg
                ? "text-pansblue-900 hover:bg-blue-50"
                : "text-white hover:bg-white/10"}
            `}
          >
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
              <X className="h-5 w-5" />
            </span>
            <span className={`flex items-center justify-center transition-all duration-300 ${isMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
              <Menu className="h-5 w-5" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-400 ease-out
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`
            absolute top-0 right-0 h-full w-[80vw] max-w-sm
            bg-white flex flex-col
            shadow-2xl
            transition-transform duration-400 ease-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
            <span className="text-lg font-bold text-pansblue-900 font-display">Navigation</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:text-pansblue-900 hover:bg-blue-50 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: isMenuOpen ? `${i * 40 + 100}ms` : "0ms" }}
                className={`
                  flex items-center justify-between px-4 py-3 rounded-xl
                  text-gray-700 font-medium
                  hover:text-pansblue-900 hover:bg-blue-50
                  transition-all duration-200
                  ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
                `}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-6 pb-8 pt-4 border-t border-gray-100">
            <Link href="/join" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-pansblue-900 hover:bg-pansblue-800 text-white h-11 rounded-xl font-semibold">
                Join PANS
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}