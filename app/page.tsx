import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import type { Metadata } from "next"
import EventCard from "@/components/event-card"
import OfficialCard from "@/components/official-card"

export const metadata: Metadata = {
  title: "Home | PANS UNIPORT",
  description: "Welcome to the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-16 md:py-24 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
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
          
        </div>

        {/* Content */}
        <div className="container px-4 md:px-6 relative z-10 flex flex-col justify-center h-full">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Pharmaceutical Association of Nigerian Students
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">University of Port Harcourt Chapter</p>
            </div>
            <div className="space-x-4">
              <Link href="/events">
                <Button className="bg-white text-pansblue-900 hover:bg-gray-100">Upcoming Events</Button>
              </Link>
              <Link href="/officials">
                <Button className="text-white border-white hover:bg-white/10">Meet Our Officials</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12 md:py-16 bg-blue-50">
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
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button variant="outline" className="text-pansblue-900 border-pansblue-900 hover:bg-blue-50">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Officials Preview Section */}
      <section className="py-12 md:py-16">
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
            {officials.slice(0, 4).map((official) => (
              <OfficialCard key={official.id} official={official} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/officials">
              <Button className="bg-pansblue-900 hover:bg-pansblue-800">
                <Users className="mr-2 h-4 w-4" />
                View All Officials
              </Button>
            </Link>
          </div>
        </div>
      </section>
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
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Jane Smith",
    position: "Vice President",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Michael Johnson",
    position: "General Secretary",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Sarah Williams",
    position: "Financial Secretary",
    image: "/placeholder.svg?height=300&width=300",
  },
]

