import Image from "next/image"
import { Mail, Twitter, Linkedin, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Officials | PANS UNIPORT",
  description:
    "Meet the officials and leadership team of the Pharmaceutical Association of Nigerian Students, UNIPORT Chapter",
}

export default function OfficialsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Page Hero ──────────────────────────────────────────────────── */}
      <div className="relative bg-pansblue-950 pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pansblue-700/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-pansblue-400 text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
              Leadership
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-[0.9] mb-6">
              Meet Our<br />
              <span className="gradient-text">Officials</span>
            </h1>
            <p className="text-pansblue-300 text-base md:text-lg leading-relaxed max-w-xl">
              The dedicated team steering PANS UNIPORT for the 2024/2025 academic session —
              committed to excellence, service, and student welfare.
            </p>
          </div>
        </div>
      </div>

      {/* ── Executive Committee ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">

          <div className="mb-14">
            <div className="inline-flex items-center gap-2 text-pansblue-600 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
              Executive Committee
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pansblue-950 leading-tight">
              Executive Officers
            </h2>
          </div>

          {/* President — featured large card */}
          <div className="mb-10">
            <div className="group relative rounded-3xl overflow-hidden bg-pansblue-900 grid grid-cols-1 md:grid-cols-2 min-h-[360px]">
              {/* Decorative bg */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 80% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)`
                }}
              />
              {/* Text side */}
              <div className="relative z-10 flex flex-col justify-center px-8 md:px-12 py-10 md:py-14">
                <span className="inline-flex items-center self-start text-[11px] font-bold tracking-widest uppercase text-pansblue-300 border border-pansblue-700 rounded-full px-3 py-1 mb-6">
                  President · 2024/2025
                </span>
                <h3 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
                  {executiveOfficials[0].name}
                </h3>
                <p className="text-pansblue-300 text-sm mb-6">{executiveOfficials[0].department} · Faculty of Pharmaceutical Sciences</p>
                <p className="text-pansblue-200 text-sm leading-relaxed max-w-sm mb-8">
                  Leading PANS UNIPORT with a vision for academic excellence, community impact,
                  and meaningful professional development for every member.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${executiveOfficials[0].email}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-2.5 transition-all duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    Email President
                  </a>
                </div>
              </div>
              {/* Photo side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={executiveOfficials[0].image || "/user.jpg"}
                  alt={executiveOfficials[0].name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pansblue-900/60 md:from-pansblue-900/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Rest of executives — grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {executiveOfficials.slice(1).map((official) => (
              <ExecutiveCard key={official.id} official={official} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Committee Heads ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">

          <div className="mb-14">
            <div className="inline-flex items-center gap-2 text-pansblue-600 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
              Committees
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pansblue-950 leading-tight">
              Committee Heads
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {committeeHeads.map((official) => (
              <CommitteeCard key={official.id} official={official} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-pansblue-900 px-8 md:px-16 py-14 md:py-20 text-center">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 40%)`
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Interested in Leadership?
              </h2>
              <p className="text-pansblue-200 text-base md:text-lg mb-8 leading-relaxed">
                PANS UNIPORT elections are held annually. Join us and make your voice count
                in shaping the future of pharmaceutical education at UNIPORT.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/join">
                  <Button className="h-12 px-8 bg-white text-pansblue-900 hover:bg-blue-50 font-bold rounded-xl shadow-xl shadow-black/20 text-sm group">
                    Join PANS
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="h-12 px-8 bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl text-sm">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ─── Executive card ─────────────────────────────────────────────────────── */
function ExecutiveCard({ official }: { official: (typeof executiveOfficials)[0] }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-pansblue-200 hover:shadow-xl hover:shadow-pansblue-900/8 transition-all duration-300 hover:-translate-y-1">

      {/* Photo */}
      <div className="relative h-56 overflow-hidden bg-pansblue-50">
        <Image
          src={official.image || "/user.jpg"}
          alt={official.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-pansblue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Email link on hover */}
        <a
          href={`mailto:${official.email}`}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-pansblue-900/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap"
        >
          <Mail className="h-3 w-3" />
          {official.email}
        </a>
      </div>

      {/* Info */}
      <div className="p-5">
        {/* Accent line */}
        <div className="w-8 h-[3px] bg-pansblue-500 rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
        <h3 className="font-display text-lg font-bold text-pansblue-950 leading-tight">{official.name}</h3>
        <p className="text-pansblue-600 text-sm font-semibold mt-0.5">{official.position}</p>
        <p className="text-gray-400 text-xs mt-1">{official.department}</p>
      </div>
    </div>
  )
}

/* ─── Committee card ─────────────────────────────────────────────────────── */
function CommitteeCard({ official }: { official: (typeof committeeHeads)[0] }) {
  return (
    <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-pansblue-200 hover:bg-blue-50/40 hover:shadow-lg hover:shadow-pansblue-900/5 transition-all duration-300">

      {/* Avatar */}
      <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden bg-pansblue-50 border-2 border-white shadow-md">
        <Image
          src={official.image || "/user.jpg"}
          alt={official.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          sizes="64px"
        />
      </div>

      {/* Info */}
      <div className="min-w-0">
        <h3 className="font-display text-base font-bold text-pansblue-950 leading-tight truncate">{official.name}</h3>
        <p className="text-pansblue-600 text-xs font-semibold mt-0.5 leading-tight">{official.position}</p>
        <p className="text-gray-400 text-xs mt-0.5">{official.department}</p>
      </div>
    </div>
  )
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const executiveOfficials = [
  {
    id: "1",
    name: "John Doe",
    position: "President",
    department: "500 Level",
    email: "president@pansuniport.org",
    image: "/user.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    position: "Vice President",
    department: "400 Level",
    email: "vicepresident@pansuniport.org",
    image: "/user.jpg",
  },
  {
    id: "3",
    name: "Michael Johnson",
    position: "General Secretary",
    department: "400 Level",
    email: "secretary@pansuniport.org",
    image: "/user.jpg",
  },
  {
    id: "4",
    name: "Sarah Williams",
    position: "Financial Secretary",
    department: "300 Level",
    email: "finance@pansuniport.org",
    image: "/user.jpg",
  },
  {
    id: "5",
    name: "David Brown",
    position: "Public Relations Officer",
    department: "300 Level",
    email: "pro@pansuniport.org",
    image: "/user.jpg",
  },
  {
    id: "6",
    name: "Emily Davis",
    position: "Social Director",
    department: "300 Level",
    email: "social@pansuniport.org",
    image: "/user.jpg",
  },
  {
    id: "7",
    name: "Robert Wilson",
    position: "Sports Director",
    department: "200 Level",
    email: "sports@pansuniport.org",
    image: "/user.jpg",
  },
  {
    id: "8",
    name: "Amanda Taylor",
    position: "Welfare Director",
    department: "300 Level",
    email: "welfare@pansuniport.org",
    image: "/user.jpg",
  },
]

const committeeHeads = [
  {
    id: "9",
    name: "James Anderson",
    position: "Academic Committee Head",
    department: "400 Level",
    image: "/user.jpg",
  },
  {
    id: "10",
    name: "Patricia Moore",
    position: "Health Outreach Committee Head",
    department: "300 Level",
    image: "/user.jpg",
  },
  {
    id: "11",
    name: "Thomas Clark",
    position: "Research Committee Head",
    department: "400 Level",
    image: "/user.jpg",
  },
  {
    id: "12",
    name: "Rebecca Johnson",
    position: "Publication Committee Head",
    department: "300 Level",
    image: "/user.jpg",
  },
  {
    id: "13",
    name: "Daniel Lewis",
    position: "Ethics Committee Head",
    department: "400 Level",
    image: "/user.jpg",
  },
  {
    id: "14",
    name: "Olivia Martin",
    position: "Alumni Relations Committee Head",
    department: "300 Level",
    image: "/user.jpg",
  },
]