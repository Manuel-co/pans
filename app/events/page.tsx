"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useState, useEffect } from "react"

export default function EventsPage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    setIsPageLoaded(true)
  }, [])

  return (
    <div className="container px-4 md:px-6 py-12">
      <AnimatedSection
        animation="fade-up"
        className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pansblue-900">
            Upcoming Events
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Stay updated with all our upcoming activities and programs
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-8">
        {events.map((event, index) => (
          <AnimatedSection
            key={event.id}
            animation="fade-up"
            delay={index * 100}
            className={`transition-all duration-500 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm hover-lift hover:shadow-md transition-all duration-300">
              <div className="md:w-1/3 bg-blue-100 p-6 flex flex-col justify-center items-center text-center">
                <div className="text-4xl font-bold text-pansblue-900">{event.day}</div>
                <div className="text-xl text-pansblue-700">{event.month}</div>
                <div className="mt-2 text-pansblue-600">{event.year}</div>
              </div>
              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold text-pansblue-900 mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="mr-2 h-4 w-4 text-pansblue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="mr-2 h-4 w-4 text-pansblue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="mr-2 h-4 w-4 text-pansblue-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-pansblue-700 border-blue-200 bg-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/events/${event.id}`}>
                  <Button className="bg-pansblue-900 hover:bg-pansblue-800 transition-all duration-300 group">
                    Learn More
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

// Sample data
const events = [
  {
    id: "1",
    title: "Annual Health Outreach",
    description:
      "Join us for our annual health outreach program where we provide free medical services to the community. Activities include free health checks, medication counseling, and health education.",
    day: "15",
    month: "May",
    year: "2025",
    date: "May 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "University Health Center",
    tags: ["Health", "Community Service", "Outreach"],
  },
  {
    id: "2",
    title: "Pharmacy Week Symposium",
    description:
      "A week-long event featuring guest speakers, workshops, and networking opportunities for pharmacy students. This year's theme is 'The Future of Pharmaceutical Care in Nigeria'.",
    day: "10-17",
    month: "Jun",
    year: "2025",
    date: "June 10-17, 2025",
    time: "Various times",
    location: "Faculty of Pharmaceutical Sciences",
    tags: ["Symposium", "Workshop", "Networking"],
  },
  {
    id: "3",
    title: "Career Development Workshop",
    description:
      "Learn about career opportunities in the pharmaceutical industry and how to prepare for your future career. Industry professionals will be present to share their experiences and offer guidance.",
    day: "05",
    month: "Jul",
    year: "2025",
    date: "July 5, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Lecture Hall 3",
    tags: ["Career", "Workshop", "Professional Development"],
  },
  {
    id: "4",
    title: "PANS Annual Dinner and Awards Night",
    description:
      "Join us for an evening of celebration as we recognize outstanding achievements within our association and faculty. Dinner, awards, and entertainment included.",
    day: "20",
    month: "Aug",
    year: "2025",
    date: "August 20, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "University Auditorium",
    tags: ["Social", "Awards", "Dinner"],
  },
  {
    id: "5",
    title: "Freshers' Orientation Program",
    description:
      "Welcome program for new pharmacy students. Learn about the faculty, curriculum, and student life. Meet senior students and faculty members.",
    day: "12",
    month: "Sep",
    year: "2025",
    date: "September 12, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Faculty Main Hall",
    tags: ["Orientation", "Freshers", "Welcome"],
  },
]

