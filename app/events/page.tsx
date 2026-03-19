"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ArrowRight, Tag } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Page hero */}
      <div className="bg-pansblue-950 pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
  
        <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-pansblue-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
            What's Happening
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] mb-4">
            Events &<br />
            <span className="gradient-text">Programmes</span>
          </h1>
          <p className="text-pansblue-300 text-base md:text-lg max-w-xl">
            Stay updated with all our upcoming activities, workshops, and community outreach programmes.
          </p>
        </div>
      </div>

      {/* Events list */}
      <div className="container px-4 md:px-6 max-w-7xl mx-auto py-16 md:py-20">
        <div className="space-y-6">
          {events.map((event, index) => (
            <AnimatedSection key={event.id} animation="fade-up" delay={index * 60}>
              <article className="group grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[160px_1fr_auto] gap-0 border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-pansblue-200 hover:shadow-xl hover:shadow-pansblue-900/6 transition-all duration-300">

                {/* Date column */}
                <div className="bg-pansblue-900 group-hover:bg-pansblue-800 transition-colors duration-300 flex flex-row md:flex-col items-center md:justify-center gap-3 md:gap-0 px-6 py-5 md:py-0">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-white font-display leading-none">{event.day}</div>
                    <div className="text-pansblue-300 text-sm md:text-base font-semibold mt-0.5">{event.month}</div>
                    <div className="text-pansblue-400 text-xs">{event.year}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {event.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-pansblue-700 bg-pansblue-50 border border-pansblue-100 px-2 py-0.5 rounded-md tracking-wide"
                      >
                        <Tag className="h-2.5 w-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-xl md:text-2xl font-bold text-pansblue-950 mb-2 group-hover:text-pansblue-700 transition-colors duration-200">
                    {event.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-2xl">{event.description}</p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Clock className="h-3.5 w-3.5 text-pansblue-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-pansblue-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-pansblue-400" />
                      {event.location}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6 md:px-8 md:pb-0 md:flex md:items-center lg:pr-8">
                  <Link href={`/events/${event.id}`}>
                    <Button className="w-full md:w-auto bg-pansblue-900 hover:bg-pansblue-800 text-white rounded-xl font-semibold text-sm group/btn shadow-md shadow-pansblue-900/20 px-6">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}

const events = [
  {
    id: "1",
    title: "Annual Health Outreach",
    description: "Join us for our annual health outreach program where we provide free medical services to the community. Activities include free health checks, medication counseling, and health education.",
    day: "15", month: "May", year: "2025",
    date: "May 15, 2025", time: "9:00 AM – 4:00 PM",
    location: "University Health Center",
    tags: ["Health", "Community Service", "Outreach"],
  },
  {
    id: "2",
    title: "Pharmacy Week Symposium",
    description: "A week-long event featuring guest speakers, workshops, and networking opportunities. This year's theme: 'The Future of Pharmaceutical Care in Nigeria'.",
    day: "10–17", month: "Jun", year: "2025",
    date: "June 10–17, 2025", time: "Various times",
    location: "Faculty of Pharmaceutical Sciences",
    tags: ["Symposium", "Workshop", "Networking"],
  },
  {
    id: "3",
    title: "Career Development Workshop",
    description: "Learn about career opportunities in the pharmaceutical industry and how to prepare for your future career. Industry professionals share their experiences.",
    day: "05", month: "Jul", year: "2025",
    date: "July 5, 2025", time: "10:00 AM – 2:00 PM",
    location: "Lecture Hall 3",
    tags: ["Career", "Workshop", "Professional Development"],
  },
  {
    id: "4",
    title: "PANS Annual Dinner & Awards Night",
    description: "An evening celebrating outstanding achievements within our association and faculty. Dinner, awards, and entertainment included.",
    day: "20", month: "Aug", year: "2025",
    date: "August 20, 2025", time: "6:00 PM – 10:00 PM",
    location: "University Auditorium",
    tags: ["Social", "Awards", "Dinner"],
  },
  {
    id: "5",
    title: "Freshers' Orientation Program",
    description: "Welcome program for new pharmacy students. Learn about the faculty, curriculum, and student life. Meet senior students and faculty members.",
    day: "12", month: "Sep", year: "2025",
    date: "September 12, 2025", time: "9:00 AM – 1:00 PM",
    location: "Faculty Main Hall",
    tags: ["Orientation", "Freshers", "Welcome"],
  },
]