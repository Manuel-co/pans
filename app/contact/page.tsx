"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@pansuniport.org",
    sub: "We reply within 24 hours",
    href: "mailto:info@pansuniport.org",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 800 123 4567",
    sub: "Mon – Fri, 9 am – 5 pm",
    href: "tel:+2348001234567",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Faculty of Pharmaceutical Sciences",
    sub: "University of Port Harcourt, Rivers State",
    href: "https://maps.google.com/?q=University+of+Port+Harcourt+Faculty+of+Pharmaceutical+Sciences",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 9 am – 5 pm",
    sub: "Sat: 10 am – 2 pm (by appt.)",
    href: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative bg-pansblue-950 pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pansblue-700/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-pansblue-400 text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-[2px] bg-pansblue-500 rounded-full" />
              Get in Touch
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-[0.9] mb-6">
              Contact<br />
              <span className="gradient-text">Us</span>
            </h1>
            <p className="text-pansblue-300 text-base md:text-lg leading-relaxed max-w-xl">
              Have a question, suggestion, or want to collaborate? We'd love to hear from you.
              Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </div>

      {/* ── Contact cards ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <div
                key={label}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 hover:border-pansblue-200 hover:shadow-xl hover:shadow-pansblue-900/6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-pansblue-50 group-hover:bg-pansblue-100 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-pansblue-700" />
                </div>
                <p className="text-xs font-bold text-pansblue-400 tracking-widest uppercase mb-2">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block text-sm font-bold text-pansblue-950 hover:text-pansblue-700 transition-colors duration-200 mb-1 leading-snug"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-bold text-pansblue-950 mb-1 leading-snug">{value}</p>
                )}
                <p className="text-xs text-gray-400 font-medium">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content: form + map ──────────────────────────────────────── */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ── Form ───────────────────────────────────────────────────── */}
            <div className="relative rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-2">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-pansblue-950">Message Sent!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }) }}
                    className="mt-4 text-sm font-semibold text-pansblue-600 hover:text-pansblue-800 underline underline-offset-4 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-pansblue-600 text-xs font-bold tracking-widest uppercase mb-3">
                      <span className="w-6 h-[2px] bg-pansblue-500 rounded-full" />
                      Message
                    </div>
                    <h2 className="font-display text-3xl font-extrabold text-pansblue-950 leading-tight">
                      Send Us a Message
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-xs font-bold text-pansblue-900 tracking-wide uppercase">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pansblue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-bold text-pansblue-900 tracking-wide uppercase">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pansblue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs font-bold text-pansblue-900 tracking-wide uppercase">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-pansblue-500 focus:border-transparent focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject…</option>
                        <option value="general">General Inquiry</option>
                        <option value="membership">Membership</option>
                        <option value="events">Events & Programmes</option>
                        <option value="partnership">Partnership / Sponsorship</option>
                        <option value="media">Media & Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-bold text-pansblue-900 tracking-wide uppercase">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us what's on your mind…"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pansblue-500 focus:border-transparent focus:bg-white transition-all duration-200 resize-none"
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      disabled={loading || !form.name || !form.email || !form.message}
                      className="w-full h-12 bg-pansblue-900 hover:bg-pansblue-800 text-white rounded-xl font-semibold text-sm group shadow-lg shadow-pansblue-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                          <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>

            {/* ── Map + Directions ────────────────────────────────────────── */}
            <div className="flex flex-col gap-6">

              {/* Map embed */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-[300px] md:h-[360px] bg-pansblue-50">
                <iframe
                  title="Faculty of Pharmaceutical Sciences, UNIPORT"
                  src="https://maps.google.com/maps?q=Faculty+of+Pharmaceutical+Sciences,+University+of+Port+Harcourt,+Choba,+Rivers+State,+Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Open in Maps button */}
                <a
                  href="https://maps.app.goo.gl/ZtY5C95nhkVNSbse8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 text-xs font-semibold text-pansblue-900 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-md hover:bg-pansblue-50 transition-colors duration-200"
                >
                  <MapPin className="h-3.5 w-3.5 text-pansblue-600" />
                  Open in Maps
                </a>
              </div>

              {/* Directions */}
              <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="inline-flex items-center gap-2 text-pansblue-600 text-xs font-bold tracking-widest uppercase mb-4">
                  <span className="w-6 h-[2px] bg-pansblue-500 rounded-full" />
                  Getting Here
                </div>
                <h3 className="font-display text-xl font-bold text-pansblue-950 mb-5">Directions to the Faculty</h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold text-pansblue-700 uppercase tracking-wide mb-2">From Port Harcourt City</p>
                    <ol className="space-y-1.5">
                      {[
                        "Take East-West Road heading towards Choba",
                        "Continue past Choba Junction for ~2 km",
                        "Turn right at the UNIPORT main entrance",
                        "Follow campus road for 1.5 km",
                        "Faculty of Pharmaceutical Sciences is on your left",
                      ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pansblue-100 text-pansblue-700 text-[10px] font-bold flex items-center justify-center mt-0.5">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div>
                    <p className="text-xs font-bold text-pansblue-700 uppercase tracking-wide mb-2">By Public Transport</p>
                    <ul className="space-y-1.5">
                      {[
                        'Take a taxi or bus to "UNIPORT Main Gate"',
                        "Board a campus shuttle to the Faculty of Pharmaceutical Sciences",
                        "Shuttles run every 15–20 minutes on weekdays",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pansblue-400 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}