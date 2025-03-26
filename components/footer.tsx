import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-pansblue-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 relative bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/images/pans-logo.png"
                  alt="PANS UNIPORT Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">PANS UNIPORT</span>
            </div>
            <p className="text-blue-100">
              Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/pans.uniport/" className="text-white hover:text-blue-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://x.com/pansuniport" className="text-white hover:text-blue-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-blue-100 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/officials" className="text-blue-100 hover:text-white">
                  Officials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="text-blue-100 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-100 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-blue-100 hover:text-white">
                  Join PANS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-blue-100">info@pansuniport.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-blue-100">+234 800 123 4567</span>
              </li>
              <li className="text-blue-100">
                Faculty of Pharmaceutical Sciences,
                <br />
                University of Port Harcourt,
                <br />
                Rivers State, Nigeria
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} PANS UNIPORT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

