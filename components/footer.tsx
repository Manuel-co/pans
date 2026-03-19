import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const QUICK_LINKS = [
  { label: "Home",      href: "/" },
  { label: "About Us",  href: "/about" },
  { label: "Events",    href: "/events" },
  { label: "Officials", href: "/officials" },
]

const RESOURCE_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Blog",    href: "/blog" },
  { label: "FAQ",     href: "/faq" },
  { label: "Join PANS", href: "/join" },
]

export default function Footer() {
  return (
    <footer className="bg-pansblue-950 text-white relative overflow-hidden">

      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pansblue-600/60 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pansblue-900/40 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-16 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="/images/pans-logo.png"
                  alt="PANS UNIPORT"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-bold font-display tracking-wide">PANS UNIPORT</div>
                <div className="text-[10px] text-pansblue-400 font-medium">Est. 1985</div>
              </div>
            </Link>

            <p className="text-pansblue-300 text-sm leading-relaxed">
              Official student body of the Faculty of Pharmaceutical Sciences,
              University of Port Harcourt.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { href: "#", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/pans.uniport/", icon: Instagram, label: "Instagram" },
                { href: "https://x.com/pansuniport", icon: Twitter, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/8 flex items-center justify-center text-pansblue-300 hover:text-white hover:bg-pansblue-700 hover:border-pansblue-600 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-pansblue-400 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-pansblue-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-pansblue-400 mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {RESOURCE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-pansblue-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-pansblue-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@pansuniport.org" className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-3.5 w-3.5 text-pansblue-400" />
                  </div>
                  <span className="text-sm text-pansblue-300 group-hover:text-white transition-colors duration-200 leading-tight">
                    info@pansuniport.org
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+2348001234567" className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-pansblue-400" />
                  </div>
                  <span className="text-sm text-pansblue-300 group-hover:text-white transition-colors duration-200 leading-tight">
                    +234 800 123 4567
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-pansblue-400" />
                  </div>
                  <address className="text-sm text-pansblue-300 not-italic leading-relaxed">
                    Faculty of Pharmaceutical Sciences,<br />
                    University of Port Harcourt,<br />
                    Rivers State, Nigeria
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-pansblue-500 text-xs">
          <p>© {new Date().getFullYear()} PANS UNIPORT. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-pansblue-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-pansblue-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}