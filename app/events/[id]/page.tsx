"use client"

import { useEffect, useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Share2, ArrowLeft, Tag, ExternalLink } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useRouter } from "next/navigation"

interface EventParams {
  params: Promise<{
    id: string
  }>
}

export default function EventPage({ params }: EventParams) {
  // Unwrap the params Promise using React.use()
  const unwrappedParams = use(params)
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [relatedEvents, setRelatedEvents] = useState<any[]>([])
  const router = useRouter()

  // We'll remove the intersection observer for the hero section since it's causing issues
  // and we want the content to be visible immediately

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate fetching the event data
    const fetchEvent = () => {
      setLoading(true)

      // Find the event with the matching ID
      const foundEvent = events.find((e) => e.id === unwrappedParams.id)

      if (foundEvent) {
        setEvent(foundEvent)

        // Get related events (excluding the current one)
        const related = events
          .filter((e) => e.id !== unwrappedParams.id)
          .filter((e) => e.tags.some((tag) => foundEvent.tags.includes(tag)))
          .slice(0, 3)

        setRelatedEvents(related)
      }

      setLoading(false)
    }

    fetchEvent()
  }, [unwrappedParams.id])

  // Handle case where event is not found
  if (!loading && !event) {
    return (
      <div className="container px-4 md:px-6 py-24 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-pansblue-900 mb-4">Event Not Found</h1>
        <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push("/events")} className="bg-pansblue-900 hover:bg-pansblue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>
      </div>
    )
  }

  if (loading || !event) {
    return (
      <div className="container px-4 md:px-6 py-24 flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <div className="relative pt-16 md:pt-24 pb-16 md:pb-24 bg-pansblue-900">
        {/* Background Image Container */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0  z-10"></div>
          <Image
            // src={event.coverImage || "/event.jpg?height=600&width=1200"}
src="/event.jpg?height=600&width=1200"
            alt={`${event.title} cover`}
            fill
            className="object-cover opacity-30 z-0"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content Container - No opacity transition */}
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {event.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white border-blue-400 bg-blue-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{event.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="h-5 w-5 text-blue-200" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="h-5 w-5 text-blue-200" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5 text-blue-200" />
                <span>{event.location}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-pansblue-900 hover:bg-gray-100 transition-all duration-300">
                Register Now
              </Button>
              <Button
                // variant="outline"
                className="text-white border-white hover:bg-white/10 transition-all duration-300"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Event
              </Button>
              <Link href="/events">
                <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <AnimatedSection animation="fade-up" className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-pansblue-900 mb-6">About This Event</h2>

              <div className="prose max-w-none text-gray-700 mb-8">
                <p className="mb-4">{event.fullDescription || event.description}</p>

                {event.additionalInfo &&
                  event.additionalInfo.map((info: string, index: number) => (
                    <p key={index} className="mb-4">
                      {info}
                    </p>
                  ))}
              </div>

              {event.schedule && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-pansblue-900 mb-4">Event Schedule</h3>
                  <div className="space-y-4">
                    {event.schedule.map((item: any, index: number) => (
                      <div key={index} className="border-l-4 border-pansblue-600 pl-4 py-2 hover-lift">
                        <p className="font-semibold text-pansblue-800">{item.time}</p>
                        <p className="font-bold">{item.title}</p>
                        {item.description && <p className="text-gray-600">{item.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.speakers && event.speakers.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-pansblue-900 mb-4">Speakers & Presenters</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {event.speakers.map((speaker: any, index: number) => (
                      <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover-scale">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden">
                          <Image
                            src={speaker.image || "/placeholder.svg?height=100&width=100"}
                            alt={speaker.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{speaker.name}</p>
                          <p className="text-sm text-gray-600">{speaker.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.gallery && event.gallery.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-pansblue-900 mb-4">Event Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {event.gallery.map((image: string, index: number) => (
                      <div key={index} className="relative h-40 rounded-lg overflow-hidden hover-scale">
                        <Image
                          src={image || "/placeholder.svg?height=300&width=400"}
                          alt={`Event image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-pansblue-900 mb-4">Event Details</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-pansblue-800">Date & Time</p>
                      <p className="text-gray-700">{event.date}</p>
                      <p className="text-gray-700">{event.time}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-pansblue-800">Location</p>
                      <p className="text-gray-700">{event.location}</p>
                      {event.locationDetails && <p className="text-gray-600 text-sm">{event.locationDetails}</p>}
                    </div>

                    {event.organizer && (
                      <div>
                        <p className="font-semibold text-pansblue-800">Organized by</p>
                        <p className="text-gray-700">{event.organizer}</p>
                      </div>
                    )}

                    {event.contact && (
                      <div>
                        <p className="font-semibold text-pansblue-800">Contact</p>
                        <p className="text-gray-700">{event.contact}</p>
                      </div>
                    )}

                    {event.registrationFee !== undefined && (
                      <div>
                        <p className="font-semibold text-pansblue-800">Registration Fee</p>
                        <p className="text-gray-700">
                          {event.registrationFee === 0 ? "Free" : `₦${event.registrationFee}`}
                        </p>
                      </div>
                    )}

                    {event.capacity && (
                      <div>
                        <p className="font-semibold text-pansblue-800">Capacity</p>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-pansblue-600" />
                          <p className="text-gray-700">{event.capacity} attendees</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-pansblue-900 hover:bg-pansblue-800 transition-all duration-300">
                      Register Now
                    </Button>
                  </div>
                </div>

                {event.externalLink && (
                  <div className="bg-white border rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-pansblue-900 mb-4">External Resources</h3>
                    <a
                      href={event.externalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-pansblue-700 hover:text-pansblue-900 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {event.externalLink.title}
                    </a>
                  </div>
                )}

                {event.tags && event.tags.length > 0 && (
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-xl font-bold text-pansblue-900 mb-4">Event Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold text-pansblue-700 border-blue-200 bg-blue-50"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <AnimatedSection animation="fade-in" className="py-12 md:py-16 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-pansblue-900 mb-8">Related Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((relatedEvent, index) => (
                <Link key={relatedEvent.id} href={`/events/${relatedEvent.id}`} className="block">
                  <AnimatedSection animation="fade-up" delay={index * 100} className="h-full">
                    <div className="flex flex-col h-full rounded-lg border bg-white shadow-sm hover-lift transition-all duration-300 hover:shadow-md">
                      <div className="p-6">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-pansblue-900 border-blue-200 bg-blue-100 mb-2">
                          {relatedEvent.date}
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-pansblue-900 mb-2">
                          {relatedEvent.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{relatedEvent.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  )
}

// Sample data - in a real app, this would come from an API or database
const events = [
  {
    id: "1",
    title: "Annual Health Outreach",
    description:
      "Join us for our annual health outreach program where we provide free medical services to the community. Activities include free health checks, medication counseling, and health education.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    fullDescription:
      "The Annual Health Outreach is PANS UNIPORT's flagship community service event. Every year, we organize this comprehensive health program to provide essential medical services to underserved communities around Port Harcourt. Our goal is to promote health awareness, provide basic healthcare services, and educate the public on proper medication use and health maintenance.\n\nThis year's outreach will feature free health screenings including blood pressure checks, blood glucose tests, BMI calculations, and basic eye examinations. We will also provide medication counseling, where experienced pharmacy students under supervision will offer guidance on proper medication use, potential side effects, and drug interactions.\n\nAdditionally, we will conduct health education sessions on various topics including hypertension, diabetes, malaria prevention, and proper medication storage and disposal. These sessions aim to empower community members with knowledge to better manage their health.",
    day: "15",
    month: "May",
    year: "2025",
    date: "May 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "University Health Center",
    locationDetails: "Main Hall, Ground Floor",
    tags: ["Health", "Community Service", "Outreach"],
    organizer: "PANS UNIPORT Health Committee",
    contact: "health@pansuniport.org | +234 800 123 4567",
    registrationFee: 0,
    capacity: 500,
    schedule: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "Opening Ceremony",
        description: "Welcome address by the PANS President and Faculty Dean",
      },
      {
        time: "10:00 AM - 1:00 PM",
        title: "Health Screenings",
        description: "Blood pressure, glucose tests, BMI calculations, and basic eye examinations",
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "Lunch Break",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Health Education Sessions",
        description: "Parallel sessions on various health topics",
      },
      {
        time: "3:30 PM - 4:00 PM",
        title: "Closing Remarks",
      },
    ],
    speakers: [
      {
        name: "Dr. Sarah Johnson",
        title: "Head of Community Health, UPTH",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Prof. Michael Adeyemi",
        title: "Dean, Faculty of Pharmaceutical Sciences",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    externalLink: {
      title: "Download Health Outreach Brochure",
      url: "#",
    },
  },
  {
    id: "2",
    title: "Pharmacy Week Symposium",
    description:
      "A week-long event featuring guest speakers, workshops, and networking opportunities for pharmacy students. This year's theme is 'The Future of Pharmaceutical Care in Nigeria'.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    fullDescription:
      "The Pharmacy Week Symposium is an annual academic event organized by PANS UNIPORT to explore current trends, challenges, and innovations in pharmaceutical sciences and practice. This year's theme, 'The Future of Pharmaceutical Care in Nigeria', will focus on emerging technologies, evolving practice models, and policy developments shaping the future of pharmacy in Nigeria.\n\nThe symposium will feature keynote addresses from leading pharmaceutical professionals, panel discussions on critical issues facing the profession, workshops on practical skills development, and networking sessions with industry representatives. This is an excellent opportunity for pharmacy students to gain insights into the future of their profession and connect with potential employers and mentors.",
    day: "10-17",
    month: "Jun",
    year: "2025",
    date: "June 10-17, 2025",
    time: "Various times",
    location: "Faculty of Pharmaceutical Sciences",
    locationDetails: "Main Auditorium and Lecture Halls",
    tags: ["Symposium", "Workshop", "Networking", "Academic"],
    organizer: "PANS UNIPORT Academic Committee",
    contact: "academic@pansuniport.org | +234 800 123 4567",
    registrationFee: 2000,
    capacity: 300,
    schedule: [
      {
        time: "June 10, 10:00 AM",
        title: "Opening Ceremony",
        description: "Official opening of Pharmacy Week",
      },
      {
        time: "June 11-12",
        title: "Keynote Addresses and Panel Discussions",
      },
      {
        time: "June 13-14",
        title: "Workshops and Skill Development Sessions",
      },
      {
        time: "June 15-16",
        title: "Industry Exhibition and Networking",
      },
      {
        time: "June 17, 4:00 PM",
        title: "Closing Ceremony and Awards",
      },
    ],
    speakers: [
      {
        name: "Pharm. Olumide Akintayo",
        title: "Former President, PSN",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Dr. Monica Eimunjeze",
        title: "Director, NAFDAC",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Prof. Chinedum Babalola",
        title: "Vice-Chancellor, Chrisland University",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    externalLink: {
      title: "View Full Symposium Program",
      url: "#",
    },
  },
  {
    id: "3",
    title: "Career Development Workshop",
    description:
      "Learn about career opportunities in the pharmaceutical industry and how to prepare for your future career. Industry professionals will be present to share their experiences and offer guidance.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    fullDescription:
      "The Career Development Workshop is designed to help pharmacy students explore various career paths within the pharmaceutical sector and develop the skills needed to succeed in their chosen fields. This interactive workshop will provide practical guidance on career planning, resume building, interview preparation, and professional networking.\n\nIndustry professionals from different sectors of pharmacy practice including hospital pharmacy, community pharmacy, industrial pharmacy, regulatory affairs, and academia will share their experiences and insights. They will discuss the skills and qualifications required for different roles, day-to-day responsibilities, challenges and rewards, and tips for breaking into their respective fields.\n\nThe workshop will also include resume review sessions, mock interviews, and networking opportunities with potential employers. This is an essential event for pharmacy students at all levels who want to gain clarity on their career paths and develop a strategic plan for their professional development.",
    day: "05",
    month: "Jul",
    year: "2025",
    date: "July 5, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Lecture Hall 3",
    tags: ["Career", "Workshop", "Professional Development"],
    organizer: "PANS UNIPORT Career Committee",
    contact: "careers@pansuniport.org | +234 800 123 4567",
    registrationFee: 500,
    capacity: 150,
    schedule: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Introduction to Pharmacy Career Paths",
      },
      {
        time: "10:30 AM - 11:30 AM",
        title: "Panel Discussion with Industry Professionals",
      },
      {
        time: "11:30 AM - 12:30 PM",
        title: "Resume Building and Interview Skills Workshop",
      },
      {
        time: "12:30 PM - 1:00 PM",
        title: "Networking Break",
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "One-on-One Resume Reviews and Mock Interviews",
      },
    ],
    speakers: [
      {
        name: "Pharm. David Okonkwo",
        title: "HR Manager, Emzor Pharmaceuticals",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Pharm. Blessing Adegoke",
        title: "Clinical Pharmacist, UPTH",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    externalLink: {
      title: "Download Career Guide for Pharmacy Students",
      url: "#",
    },
  },
  {
    id: "4",
    title: "PANS Annual Dinner and Awards Night",
    description:
      "Join us for an evening of celebration as we recognize outstanding achievements within our association and faculty. Dinner, awards, and entertainment included.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    day: "20",
    month: "Aug",
    year: "2025",
    date: "August 20, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "University Auditorium",
    tags: ["Social", "Awards", "Dinner"],
    organizer: "PANS UNIPORT Social Committee",
    registrationFee: 3000,
    capacity: 200,
  },
  {
    id: "5",
    title: "Freshers' Orientation Program",
    description:
      "Welcome program for new pharmacy students. Learn about the faculty, curriculum, and student life. Meet senior students and faculty members.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    day: "12",
    month: "Sep",
    year: "2025",
    date: "September 12, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Faculty Main Hall",
    tags: ["Orientation", "Freshers", "Welcome"],
    organizer: "PANS UNIPORT Executive Committee",
    registrationFee: 0,
    capacity: 100,
  },
]

