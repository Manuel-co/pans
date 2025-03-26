import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Navigation, Clock, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | PANS UNIPORT",
  description: "Contact the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pansblue-900">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get in touch with PANS UNIPORT or visit our faculty
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-pansblue-900 mb-6">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-pansblue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600 mb-2">For general inquiries:</p>
                <a href="mailto:info@pansuniport.org" className="text-pansblue-700 hover:underline">
                  info@pansuniport.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-pansblue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600 mb-2">Monday to Friday, 9am - 5pm:</p>
                <a href="tel:+2348001234567" className="text-pansblue-700 hover:underline">
                  +234 800 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-pansblue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM (By appointment only)</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-pansblue-900 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Message subject"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message"
                />
              </div>
              <Button className="bg-pansblue-900 hover:bg-pansblue-800">Send Message</Button>
            </form>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-pansblue-900 mb-6">Find Us</h2>

          <div className="rounded-lg overflow-hidden border mb-6">
            {/* Map placeholder - in a real implementation, this would be a Google Maps iframe */}
            <div className="bg-gray-100 h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-pansblue-700 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">Interactive map would appear here</p>
                  <a
                    href="https://maps.google.com/?q=University+of+Port+Harcourt+Faculty+of+Pharmaceutical+Sciences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pansblue-700 hover:text-pansblue-800"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-pansblue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                <p className="text-gray-600">
                  Faculty of Pharmaceutical Sciences,
                  <br />
                  University of Port Harcourt,
                  <br />
                  East-West Road, Choba,
                  <br />
                  Rivers State, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Navigation className="h-6 w-6 text-pansblue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Directions to the Faculty</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-pansblue-700">From Port Harcourt City:</h4>
                    <ol className="list-decimal list-inside text-gray-600 ml-4 mt-2 space-y-1">
                      <li>Take East-West Road heading towards Choba</li>
                      <li>Continue past Choba Junction for about 2 kilometers</li>
                      <li>Turn right at the University of Port Harcourt main entrance</li>
                      <li>Follow the campus road for 1.5 kilometers</li>
                      <li>The Faculty of Pharmaceutical Sciences will be on your left</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-medium text-pansblue-700">Public Transportation:</h4>
                    <ul className="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
                      <li>Take a taxi or bus to "UNIPORT Main Gate"</li>
                      <li>
                        From the main gate, you can take a campus shuttle to the Faculty of Pharmaceutical Sciences
                      </li>
                      <li>Campus shuttles run every 15-20 minutes during weekdays</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

