import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | PANS UNIPORT",
  description: "Learn about the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pansblue-900">
            About PANS UNIPORT
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn about the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-pansblue-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            The Pharmaceutical Association of Nigerian Students (PANS) UNIPORT Chapter is the official body representing
            all pharmacy students at the University of Port Harcourt. We are affiliated with the national body of PANS
            Nigeria.
          </p>
          <p className="text-gray-600 mb-4">
            Founded in 1985, PANS UNIPORT has grown to become one of the most vibrant student associations in the
            university, with a rich history of academic excellence, community service, and professional development.
          </p>
          <p className="text-gray-600">
            Our membership comprises all students of the Faculty of Pharmaceutical Sciences, from 100 level to 500
            level, united by our passion for pharmacy and commitment to healthcare.
          </p>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/about.jpg?height=600&width=800"
            alt="PANS UNIPORT members"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-pansblue-900 mb-8 text-center">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pansblue-700 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To foster academic excellence, professional development, and ethical practice among pharmacy students at
                the University of Port Harcourt, while promoting health awareness and pharmaceutical care in our
                community.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pansblue-700 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading pharmacy student association in Nigeria, producing well-rounded pharmacy professionals
                who are committed to advancing healthcare and pharmaceutical sciences in Nigeria and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-pansblue-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <div key={index} className="flex items-start gap-4 p-6 border rounded-lg bg-white shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-pansblue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-pansblue-700 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-pansblue-900 mb-8 text-center">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-6 border rounded-lg bg-white shadow-sm">
              <div className="md:w-1/3 h-[150px] rounded-lg overflow-hidden relative">
                <Image
                  src={activity.image || "/event.jpg"}
                  alt={activity.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-lg font-bold text-pansblue-700 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sample data
const coreValues = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in all our academic and professional endeavors, setting high standards for ourselves and our peers.",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards and professional conduct in all our activities and interactions.",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation and creative thinking to address healthcare challenges and advance pharmaceutical practice.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and collaboration to achieve our goals and make a positive impact.",
  },
  {
    title: "Service",
    description:
      "We are committed to serving our community through health education, outreach programs, and volunteer work.",
  },
  {
    title: "Leadership",
    description:
      "We develop leadership skills among our members to prepare them for future roles in the healthcare sector.",
  },
]

const activities = [
  {
    title: "Academic Support",
    description:
      "We organize tutorial sessions, study groups, and academic competitions to support our members' academic success and professional development.",
    image: "/event.jpg?height=300&width=400",
  },
  {
    title: "Health Outreach Programs",
    description:
      "We conduct regular health outreach programs in communities around Port Harcourt, providing free health checks, medication counseling, and health education.",
    image: "/event.jpg?height=300&width=400",
  },
  {
    title: "Professional Development",
    description:
      "We organize workshops, seminars, and career fairs to expose our members to various career opportunities in pharmacy and help them develop essential skills.",
    image: "/event.jpg?height=300&width=400",
  },
  {
    title: "Social Activities",
    description:
      "We organize social events such as dinners, sports competitions, and cultural activities to foster camaraderie and networking among our members.",
    image: "/event.jpg?height=300&width=400",
  },
]

