import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight } from "lucide-react"

interface EventCardProps {
  event: {
    id: string
    title: string
    description: string
    date: string
    time: string
    location: string
  }
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="flex flex-col h-full rounded-lg border bg-white shadow-sm hover-lift transition-all duration-300 hover:shadow-md">
      <div className="p-6 flex flex-col flex-1">
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-pansblue-900 border-blue-200 bg-blue-100 mb-2">
          {event.date}
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-pansblue-900">{event.title}</h3>
        <p className="mt-2 text-gray-600 flex-1">{event.description}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Calendar className="mr-1 h-4 w-4" />
          <span>{event.time}</span>
          <span className="mx-2">•</span>
          <span>{event.location}</span>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/events/${event.id}`}>
          <Button variant="outline" className="w-full group">
            Learn More
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

