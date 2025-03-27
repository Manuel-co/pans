"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Check, Phone, UserCircle, MapPin, CheckCircle } from "lucide-react"
import EventCard from "@/components/event-card"
import OfficialCard from "@/components/official-card"
import AnimatedSection from "@/components/animated-section"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useState, useEffect } from "react"

export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const { ref: heroRef } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  const { ref: statsRef, isIntersecting: statsVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  const { ref: featuresRef, isIntersecting: featuresVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  useEffect(() => {
    // Trigger hero animation after a short delay
    const timer = setTimeout(() => {
      setIsHeroVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section ref={heroRef as React.RefObject<HTMLElement>} className="relative min-h-screen flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Medical professionals in operating room"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container px-4 md:px-6 relative z-10 flex flex-col justify-center h-full pt-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div
              className={`space-y-2 transition-all duration-1000 ease-out ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Pharmaceutical Association of Nigerian Students
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">University of Port Harcourt Chapter</p>
            </div>
            <div
              className={`space-x-4 transition-all duration-1000 delay-300 ease-out ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Link href="/events">
                <Button className="bg-white text-pansblue-900 hover:bg-gray-100 transition-all duration-300">
                  Upcoming Events
                </Button>
              </Link>
              <Link href="/officials">
                <Button className="text-white border-white hover:bg-white/10 transition-all duration-300">
                  Meet Our Officials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef as React.RefObject<HTMLElement>} className="relative z-10 mx-4 md:mx-12 lg:mx-24 -mt-24">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-lg shadow-xl transition-all duration-700 ease-out ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-pansblue-900 text-white p-8 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-lg mb-3 animate-float">
                <UserCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium">Members</h3>
              <p className="text-4xl font-bold mt-1">5,000+</p>
            </div>
          </div>
          <div className="bg-blue-50 text-pansblue-900 p-8 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <div className="bg-pansblue-100 p-3 rounded-lg mb-3 animate-float" style={{ animationDelay: "1s" }}>
                <CheckCircle className="h-8 w-8 text-pansblue-700" />
              </div>
              <h3 className="text-lg font-medium">Academic Levels</h3>
              <p className="text-4xl font-bold mt-1">5</p>
            </div>
          </div>
          <div className="bg-pansblue-900 text-white p-8 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-lg mb-3 animate-float" style={{ animationDelay: "2s" }}>
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium">Years of Excellence</h3>
              <p className="text-4xl font-bold mt-1">38</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AnimatedSection animation="fade-up" className="py-16 md:py-24 bg-white mt-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-pansblue-600 font-semibold mb-2">ABOUT US</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Premier Pharmaceutical Student Body in Nigeria
              </h2>
              <div className="w-20 h-1 bg-pansblue-600 mb-6"></div>

              <p className="text-gray-700 mb-6">
                Pharmaceutical Association of Nigerian Students (PANS) UNIPORT Chapter is the official representative
                body for pharmacy students at the University of Port Harcourt. We are dedicated to promoting academic
                excellence, professional development, and community service among pharmacy students.
              </p>

              <p className="text-gray-700 mb-8">
                With a membership of over 500 students across all levels of the Faculty of Pharmaceutical Sciences, PANS
                UNIPORT has established itself as one of the most vibrant student associations in the university,
                organizing various academic, professional, and social activities for the benefit of its members and the
                wider community.
              </p>

              <div
                // ref={featuresRef as React.RefObject<HTMLElement>}
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ${featuresVisible ? "stagger-visible" : ""}`}
              >
                <div className="flex items-center gap-2 stagger-item">
                  <Check className="text-pansblue-600 h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">Academic Excellence</span>
                </div>
                <div className="flex items-center gap-2 stagger-item">
                  <Check className="text-pansblue-600 h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">Professional Development</span>
                </div>
                <div className="flex items-center gap-2 stagger-item">
                  <Check className="text-pansblue-600 h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">Community Outreach</span>
                </div>
                <div className="flex items-center gap-2 stagger-item">
                  <Check className="text-pansblue-600 h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">Networking Opportunities</span>
                </div>
              </div>

              <div className="flex items-center gap-3 hover-scale">
                <div className="bg-pansblue-900 p-3 rounded-md">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">For enquiries, call:</p>
                  <p className="font-semibold text-pansblue-900">+234 800 123 4567</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/logo.png?height=800&width=600"
                  alt="PANS UNIPORT Students"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pansblue-100 rounded-lg z-0 animate-pulse-slow"></div>
              <div
                className="absolute -top-6 -right-6 w-32 h-32 bg-pansblue-100 rounded-lg z-0 animate-pulse-slow"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Events Section */}
      <AnimatedSection animation="fade-in" className="py-12 md:py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pansblue-900">
                Upcoming Events
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with our latest activities and programs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredEvents.map((event, index) => (
              <AnimatedSection key={event.id} animation="fade-up" delay={index * 100} className="h-full">
                <EventCard event={event} />
              </AnimatedSection>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button
                variant="outline"
                className="text-pansblue-900 border-pansblue-900 hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Officials Preview Section */}
      <AnimatedSection animation="fade-in" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pansblue-900">
                Meet Our Officials
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The dedicated team leading PANS UNIPORT
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {officials.slice(0, 4).map((official, index) => (
              <AnimatedSection key={official.id} animation="fade-up" delay={index * 150} className="h-full">
                <OfficialCard official={official} />
              </AnimatedSection>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/officials">
              <Button className="bg-pansblue-900 hover:bg-pansblue-800 transition-all duration-300 hover:shadow-md">
                <Users className="mr-2 h-4 w-4" />
                View All Officials
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

// Sample data
const featuredEvents = [
  {
    id: "1",
    title: "Annual Health Outreach",
    description:
      "Join us for our annual health outreach program where we provide free medical services to the community.",
    date: "May 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "University Health Center",
  },
  {
    id: "2",
    title: "Pharmacy Week Symposium",
    description:
      "A week-long event featuring guest speakers, workshops, and networking opportunities for pharmacy students.",
    date: "June 10-17, 2025",
    time: "Various times",
    location: "Faculty of Pharmaceutical Sciences",
  },
  {
    id: "3",
    title: "Career Development Workshop",
    description:
      "Learn about career opportunities in the pharmaceutical industry and how to prepare for your future career.",
    date: "July 5, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Lecture Hall 3",
  },
]

const officials = [
  {
    id: "1",
    name: "John Doe",
    position: "President",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "2",
    name: "Jane Smith",
    position: "Vice President",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "3",
    name: "Michael Johnson",
    position: "General Secretary",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "4",
    name: "Sarah Williams",
    position: "Financial Secretary",
    image: "/user.jpg?height=300&width=300",
  },
]

