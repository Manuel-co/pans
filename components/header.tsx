"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 relative">
            <Image
              src="/images/pans-logo.png"
              alt="PANS UNIPORT Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 40px, 40px"
            />
          </div>
          <span className="text-xl font-bold text-pansblue-900">PANS UNIPORT</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-pansblue-700 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-pansblue-700 transition-colors">
            About
          </Link>
          <Link href="/events" className="text-sm font-medium hover:text-pansblue-700 transition-colors">
            Events
          </Link>
          <Link href="/officials" className="text-sm font-medium hover:text-pansblue-700 transition-colors">
            Officials
          </Link>
          {/* <Link href="/gallery" className="text-sm font-medium hover:text-pansblue-700 transition-colors">
            Gallery
          </Link> */}
          <Link href="/contact" className="text-sm font-medium hover:text-pansblue-700 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/join">
            <Button className="bg-pansblue-900 hover:bg-pansblue-800">Join PANS</Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t py-4 px-6 bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-pansblue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-pansblue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium hover:text-pansblue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/officials"
              className="text-sm font-medium hover:text-pansblue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Officials
            </Link>
            {/* <Link
              href="/gallery"
              className="text-sm font-medium hover:text-pansblue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link> */}
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-pansblue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/join" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-pansblue-900 hover:bg-pansblue-800">Join PANS</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

