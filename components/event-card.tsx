import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, ArrowRight } from "lucide-react"

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
    <div className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white shadow-sm hover-lift overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-pansblue-900/8 hover:border-pansblue-100">

      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-pansblue-600 via-pansblue-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 flex flex-col flex-1">
        {/* Date badge */}
        <div className="inline-flex items-center self-start rounded-lg bg-pansblue-50 border border-pansblue-100 px-3 py-1 text-xs font-bold text-pansblue-700 mb-4 tracking-wide">
          {event.date}
        </div>

        <h3 className="font-display text-xl font-bold text-pansblue-950 mb-3 leading-tight group-hover:text-pansblue-700 transition-colors duration-200">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
          {event.description}
        </p>

        {/* Meta */}
        <div className="flex flex-col gap-1.5 mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <Clock className="h-3.5 w-3.5 text-pansblue-400 flex-shrink-0" />
            {event.time}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <MapPin className="h-3.5 w-3.5 text-pansblue-400 flex-shrink-0" />
            {event.location}
          </div>
        </div>

        <Link href={`/events/${event.id}`}>
          <Button
            variant="outline"
            className="w-full rounded-xl border-pansblue-200 text-pansblue-900 hover:bg-pansblue-50 hover:border-pansblue-400 font-semibold text-sm group/btn transition-all duration-200"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Button>
        </Link>
      </div>
    </div>
  )
}