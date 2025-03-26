import Image from "next/image"
import { Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Officials | PANS UNIPORT",
  description:
    "Meet the officials and leadership team of the Pharmaceutical Association of Nigerian Students, UNIPORT Chapter",
}

export default function OfficialsPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pansblue-900">
            Meet Our Officials
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The dedicated team leading PANS UNIPORT for the 2024/2025 academic session
          </p>
        </div>
      </div>

      {/* Executive Committee */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-pansblue-900 mb-8 text-center">Executive Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {executiveOfficials.map((official) => (
            <div key={official.id} className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 rounded-full overflow-hidden mb-4 border-4 border-pansblue-600">
                <Image
                  src={official.image || "/user.jpg"}
                  alt={official.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>
              <h3 className="text-xl font-bold">{official.name}</h3>
              <p className="text-pansblue-700 font-medium mb-2">{official.position}</p>
              <p className="text-gray-600 text-sm mb-3">{official.department}</p>
              {/* <a
                href={`mailto:${official.email}`}
                className="inline-flex items-center text-sm text-pansblue-700 hover:text-pansblue-800"
              >
                <Mail className="h-4 w-4 mr-1" />
                {official.email}
              </a> */}
            </div>
          ))}
        </div>
      </div>

      {/* Committee Heads */}
      <div>
        <h2 className="text-2xl font-bold text-pansblue-900 mb-8 text-center">Committee Heads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeHeads.map((official) => (
            <div
              key={official.id}
              className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-sm"
            >
              <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4 border-2 border-pansblue-600">
                <Image
                  src={official.image || "/user.jpg"}
                  alt={official.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 128px"
                />
              </div>
              <h3 className="text-lg font-bold">{official.name}</h3>
              <p className="text-pansblue-700 font-medium mb-1">{official.position}</p>
              <p className="text-gray-600 text-sm">{official.department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sample data
const executiveOfficials = [
  {
    id: "1",
    name: "John Doe",
    position: "President",
    department: "500 Level",
    email: "president@pansuniport.org",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "2",
    name: "Jane Smith",
    position: "Vice President",
    department: "400 Level",
    email: "vicepresident@pansuniport.org",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "3",
    name: "Michael Johnson",
    position: "General Secretary",
    department: "400 Level",
    email: "secretary@pansuniport.org",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "4",
    name: "Sarah Williams",
    position: "Financial Secretary",
    department: "300 Level",
    email: "finance@pansuniport.org",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "5",
    name: "David Brown",
    position: "Public Relations Officer",
    department: "300 Level",
    email: "pro@pansuniport.org",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "6",
    name: "Emily Davis",
    position: "Social Director",
    department: "300 Level",
    email: "social@pansuniport.org",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "7",
    name: "Robert Wilson",
    position: "Sports Director",
    department: "200 Level",
    email: "sports@pansuniport.org",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "8",
    name: "Amanda Taylor",
    position: "Welfare Director",
    department: "300 Level",
    email: "welfare@pansuniport.org",
    image: "/user.jpg?height=300&width=300",
  },
]

const committeeHeads = [
  {
    id: "9",
    name: "James Anderson",
    position: "Academic Committee Head",
    department: "400 Level",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "10",
    name: "Patricia Moore",
    position: "Health Outreach Committee Head",
    department: "300 Level",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "11",
    name: "Thomas Clark",
    position: "Research Committee Head",
    department: "400 Level",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "12",
    name: "Rebecca Johnson",
    position: "Publication Committee Head",
    department: "300 Level",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "13",
    name: "Daniel Lewis",
    position: "Ethics Committee Head",
    department: "400 Level",
    image: "/user.jpg?height=300&width=300",
  },
  {
    id: "14",
    name: "Olivia Martin",
    position: "Alumni Relations Committee Head",
    department: "300 Level",
    image: "/user.jpg?height=300&width=300",
  },
]

