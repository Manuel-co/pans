import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  ArrowRight,
  Users,
  BookOpen,
  Heart,
  Lightbulb,
  Handshake,
  Award,
  Star,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About | PANS UNIPORT",
  description:
    "Learn about the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Page Hero ──────────────────────────────────────────────────── */}
      <div className="relative bg-pansblue-950 pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pansblue-700/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-pansblue-400 text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
              Our Story
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-[0.9] mb-6">
              About<br />
              <span className="gradient-text">PANS</span><br />
              <span className="text-white/50 text-4xl sm:text-5xl md:text-6xl font-bold">UNIPORT</span>
            </h1>
            <p className="text-pansblue-300 text-base md:text-lg leading-relaxed max-w-xl">
              The official representative body for pharmacy students at the University
              of Port Harcourt — advancing excellence since 1985.
            </p>
          </div>
        </div>
      </div>

      {/* ── Who We Are ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative">
              <div className="relative h-[420px] md:h-[540px] rounded-3xl overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="PANS UNIPORT members"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pansblue-900/30 to-transparent" />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-pansblue-900 text-white rounded-2xl px-6 py-5 shadow-2xl shadow-pansblue-900/40">
                <div className="text-4xl font-extrabold font-display leading-none">1985</div>
                <div className="text-pansblue-300 text-xs font-semibold mt-1 tracking-wide uppercase">Year Founded</div>
              </div>

              {/* Decorative blob */}
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-pansblue-50 rounded-full -z-10 animate-pulse-slow" />
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 text-pansblue-600 text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
                Who We Are
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pansblue-950 leading-tight mb-6">
                Built by Students,<br />for Students
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Pharmaceutical Association of Nigerian Students (PANS) UNIPORT Chapter is
                  the official body representing all pharmacy students at the University of Port
                  Harcourt — affiliated with the national PANS Nigeria body.
                </p>
                <p>
                  Founded in 1985, PANS UNIPORT has grown into one of the most vibrant student
                  associations in the university, with a rich history of academic excellence,
                  community service, and professional development.
                </p>
                <p>
                  Our membership spans all students of the Faculty of Pharmaceutical Sciences
                  — from 100 to 500 level — united by a passion for pharmacy and commitment
                  to healthcare.
                </p>
              </div>

              <div className="mt-8 flex gap-3">
                <Link href="/officials">
                  <Button className="h-11 px-6 bg-pansblue-900 hover:bg-pansblue-800 text-white rounded-xl font-semibold text-sm group shadow-md shadow-pansblue-900/20">
                    Meet the Team
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="h-11 px-6 rounded-xl border-pansblue-200 text-pansblue-900 hover:bg-pansblue-50 font-semibold text-sm">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-pansblue-600 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
              Purpose
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pansblue-950 leading-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="relative rounded-3xl bg-pansblue-900 p-8 md:p-10 overflow-hidden group">
              {/* Bg decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-pansblue-800/60 rounded-full -translate-y-1/3 translate-x-1/3 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                  <Heart className="h-5 w-5 text-pansblue-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-pansblue-200 leading-relaxed">
                  To foster academic excellence, professional development, and ethical practice
                  among pharmacy students at UNIPORT, while promoting health awareness and
                  pharmaceutical care in our community.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative rounded-3xl bg-white border border-gray-100 p-8 md:p-10 overflow-hidden group shadow-sm hover:shadow-lg hover:shadow-pansblue-900/6 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-pansblue-50 rounded-full -translate-y-1/3 translate-x-1/3 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-pansblue-50 flex items-center justify-center mb-6 border border-pansblue-100">
                  <Star className="h-5 w-5 text-pansblue-700" />
                </div>
                <h3 className="font-display text-2xl font-bold text-pansblue-950 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading pharmacy student association in Nigeria — producing
                  well-rounded pharmacy professionals committed to advancing healthcare and
                  pharmaceutical sciences in Nigeria and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-pansblue-600 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
              What We Stand For
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pansblue-950 leading-tight">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-pansblue-200 hover:bg-blue-50/50 hover:shadow-lg hover:shadow-pansblue-900/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pansblue-50 group-hover:bg-pansblue-100 flex items-center justify-center transition-colors duration-300 mt-0.5">
                  <value.icon className="h-5 w-5 text-pansblue-700" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-pansblue-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-pansblue-600 text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
                What We Do
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pansblue-950 leading-tight">
                Our Activities
              </h2>
            </div>
            <Link href="/events">
              <Button variant="outline" className="flex-shrink-0 h-10 px-5 rounded-xl border-pansblue-200 text-pansblue-900 hover:bg-pansblue-50 font-semibold text-sm group">
                View Upcoming Events
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="group flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-pansblue-200 hover:shadow-xl hover:shadow-pansblue-900/6 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative sm:w-44 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={activity.image || "/event.jpg"}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-pansblue-900/10 sm:bg-gradient-to-b" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="w-8 h-[3px] bg-pansblue-500 rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-display text-lg font-bold text-pansblue-950 mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  )
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in all academic and professional endeavors, setting high standards for ourselves and our peers.",
  },
  {
    icon: CheckCircle2,
    title: "Integrity",
    description: "We uphold the highest ethical standards and professional conduct in all our activities and interactions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creative thinking to address healthcare challenges and advance pharmaceutical practice.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We believe in the power of teamwork and collaboration to achieve our goals and make a positive impact.",
  },
  {
    icon: Heart,
    title: "Service",
    description: "We are committed to serving our community through health education, outreach programmes, and volunteer work.",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "We develop leadership skills among our members to prepare them for future roles in the healthcare sector.",
  },
]

const activities = [
  {
    title: "Academic Support",
    description: "Tutorial sessions, study groups, and academic competitions to support our members' success and professional development.",
    image: "/event.jpg",
  },
  {
    title: "Health Outreach Programs",
    description: "Regular health outreach in Port Harcourt communities — free health checks, medication counseling, and health education.",
    image: "/event.jpg",
  },
  {
    title: "Professional Development",
    description: "Workshops, seminars, and career fairs exposing members to various pharmacy career opportunities and essential skills.",
    image: "/event.jpg",
  },
  {
    title: "Social Activities",
    description: "Dinners, sports competitions, and cultural activities fostering camaraderie and networking among our members.",
    image: "/event.jpg",
  },
]