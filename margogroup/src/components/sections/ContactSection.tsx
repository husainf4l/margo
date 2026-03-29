'use client';

import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/20',
    label: 'Phone',
    sub: 'Call us directly',
    value: '+9627 9733 3208',
    href: 'tel:+962797333208',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    gradient: 'from-orange-500 to-rose-500',
    shadow: 'shadow-orange-500/20',
    label: 'Email',
    sub: 'Send us a message',
    value: 'info@margogroup.net',
    href: 'mailto:info@margogroup.net',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/20',
    label: 'Location',
    sub: 'Visit our office',
    value: 'Yajouz Rd. 95, Amman',
    href: 'https://maps.google.com/?q=Yajouz+Rd.+95,+Amman',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up real submission (e.g. API route)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/50 via-primary to-accent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide border border-primary/20">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We&apos;re here to answer your questions and discuss partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left column — info cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Location' ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div
                  className={`shrink-0 w-14 h-14 rounded-xl bg-linear-br ${item.gradient} text-white flex items-center justify-center shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5">{item.sub}</p>
                  <p className="text-sm font-bold text-foreground mb-0.5">{item.label}</p>
                  <p className="text-sm text-primary font-medium group-hover:text-primary/80 transition-colors">{item.value}</p>
                </div>
                <svg className="ms-auto w-5 h-5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* Response time badge */}
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-100">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Typically replies within 24 hours</span> on business days.
              </p>
            </div>
          </div>

          {/* Right column — contact form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', message: '' }); }}
                    className="mt-4 px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:bg-white hover:shadow transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-rose-500">*</span></label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span className="text-rose-500">*</span></label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company / Brand</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message <span className="text-rose-500">*</span></label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your brand and what you're looking to achieve in the Jordanian market..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                  >
                    Send Message
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                  <p className="text-xs text-center text-gray-400">By submitting, you agree to our Privacy Policy. We never share your data.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
