"use client"

import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import {
  Truck,
  Megaphone,
  Store,
  TrendingUp,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  Building2,
  Target,
  Globe,
  BarChart3,
  Shield,
  Heart,
  Clock,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const services = [
  {
    tag: 'Logistics',
    title: 'Import & Distribution',
    description:
      'End-to-end importation and nationwide distribution across all major retail and pharmacy channels. We manage customs clearance, warehousing, last-mile delivery, and inventory management to ensure brands are always available where consumers shop.',
    features: ['Customs Clearance', 'Warehousing & Storage', 'Last-Mile Delivery', 'Inventory Management'],
    accent: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    icon: <Truck className="w-7 h-7" />,
  },
  {
    tag: 'Marketing',
    title: 'Brand Marketing',
    description:
      'Strategic in-market campaigns, retail activations, and brand-building programs tailored for the Jordanian market. We handle everything from media planning and influencer partnerships to in-store events and digital campaigns.',
    features: ['Retail Activations', 'Influencer Campaigns', 'Digital Marketing', 'Brand Launches'],
    accent: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    icon: <Megaphone className="w-7 h-7" />,
  },
  {
    tag: 'Retail',
    title: 'Merchandising',
    description:
      'In-store visibility solutions, planogram management, and shelf optimization at the retail level. Our dedicated field team ensures brands are presented at their best across all touchpoints.',
    features: ['Planogram Management', 'Shelf Optimization', 'POSM Placement', 'Field Team Support'],
    accent: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    icon: <Store className="w-7 h-7" />,
  },
  {
    tag: 'Growth',
    title: 'Market Development',
    description:
      'Identifying growth opportunities, launching new SKUs, and expanding brand reach across new channels. We provide comprehensive market insights and data-driven strategies to ensure sustained brand growth.',
    features: ['Market Research', 'SKU Expansion', 'Channel Development', 'Consumer Insights'],
    accent: 'from-cyan-500 to-orange-500',
    bg: 'bg-gray-50',
    border: 'border-gray-100',
    icon: <TrendingUp className="w-7 h-7" />,
  },
  {
    tag: 'Strategy',
    title: 'Sales & Channel Management',
    description:
      'Comprehensive sales force management and channel optimization strategies. We build and manage dedicated sales teams, negotiate with retailers, and maximize market penetration across all segments.',
    features: ['Sales Team Management', 'Channel Optimization', 'Retail Negotiations', 'Performance Analytics'],
    accent: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    icon: <Target className="w-7 h-7" />,
  },
  {
    tag: 'Partnership',
    title: 'Strategic Partnerships',
    description:
      'Building long-term strategic partnerships with global manufacturers and local stakeholders. We act as your trusted advisor and market entry specialist for successful Jordanian market expansion.',
    features: ['Market Entry Strategy', 'Partnership Development', 'Regulatory Compliance', 'Local Expertise'],
    accent: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    icon: <Building2 className="w-7 h-7" />,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Market Analysis',
    description: 'We conduct comprehensive market research to understand consumer preferences, competitive landscape, and growth opportunities in Jordan.',
    icon: <BarChart3 className="w-6 h-6" />,
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Based on our analysis, we develop a customized market entry and growth strategy tailored to your brand and product portfolio.',
    icon: <Target className="w-6 h-6" />,
    accent: 'from-orange-500 to-amber-500',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We handle all aspects of implementation, from regulatory compliance and importation to distribution setup and marketing execution.',
    icon: <Zap className="w-6 h-6" />,
    accent: 'from-blue-500 to-cyan-600',
  },
  {
    step: '04',
    title: 'Growth & Optimization',
    description: 'Continuous monitoring, performance optimization, and strategic expansion to maximize your brand\'s success in the Jordanian market.',
    icon: <TrendingUp className="w-6 h-6" />,
    accent: 'from-emerald-500 to-teal-500',
  },
];

const testimonials = [
  {
    quote: "Margo Group transformed our brand's presence in Jordan. Their expertise in distribution and marketing helped us achieve 300% growth in just 18 months.",
    author: "Sarah Johnson",
    role: "Brand Manager",
    company: "European Skincare Brand",
    avatar: "SJ",
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    quote: "The team's local market knowledge and professional approach made our market entry seamless. Outstanding service from start to finish.",
    author: "Ahmed Al-Rashid",
    role: "Regional Director",
    company: "International Cosmetics Group",
    avatar: "AR",
    accent: 'from-orange-500 to-amber-500',
  },
  {
    quote: "Margo Group's merchandising and in-store execution is exceptional. Our products are now prominently featured across all major retailers.",
    author: "Maria Rodriguez",
    role: "Marketing Director",
    company: "Premium Beauty Brand",
    avatar: "MR",
    accent: 'from-purple-500 to-pink-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Navigation ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="relative flex items-center px-4 max-w-5xl mx-auto border-b border-gray-100">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/margo-group-logo.png"
                alt="Margo Group Logo"
                className="h-32 w-auto"
              />
            </Link>
          </div>
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1">
            <Link href="/#brands" className="text-gray-500 hover:text-gray-900 text-sm font-light px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200">
              Our Brands
            </Link>
            <Link href="/services" className="text-gray-900 text-sm font-semibold px-4 py-2 rounded-full bg-gray-100 transition-all duration-200">
              Services
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900 text-sm font-light px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200">
              About Us
            </Link>
            <Link href="/#contact" className="text-gray-500 hover:text-gray-900 text-sm font-light px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden pt-16 pb-20">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-orange-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              What We Offer
            </motion.span>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.div
              className="w-14 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p
              className="text-xl text-gray-500 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From import and distribution to brand marketing and in-store merchandising — everything a global brand
              needs to succeed in the Jordanian market.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">Comprehensive Services</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              From strategic planning to execution, we provide end-to-end solutions for successful brand growth in Jordan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className={`group relative bg-white border ${s.border} rounded-3xl p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Subtle bg wash on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 rounded-3xl`} />

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-white shadow-sm`}
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    {s.icon}
                  </motion.div>
                  <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase bg-gradient-to-r ${s.accent} bg-clip-text text-transparent`}>
                    {s.tag}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f, idx) => (
                    <motion.span
                      key={f}
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${s.bg} border ${s.border} text-gray-600`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (i * 0.1) + (idx * 0.05) }}
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className={`h-0.5 w-8 bg-gradient-to-r ${s.accent} rounded-full opacity-50 group-hover:w-full transition-all duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">Our Proven Process</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              A systematic approach that ensures your brand's successful market entry and sustainable growth in Jordan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-200 to-orange-200 z-0">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-orange-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 + 0.5 }}
                    />
                  </div>
                )}

                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center text-white font-bold text-sm`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.step}
                    </motion.div>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${step.accent} text-white`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Testimonials ────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">What Our Partners Say</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Hear from the brands that have achieved remarkable success with our comprehensive market solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.accent} flex items-center justify-center text-white font-semibold text-sm`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-cyan-600/25 to-transparent rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-tr-3xl" />
            <div className="relative z-10">
              <motion.span
                className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-400 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Get Started
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to Enter the Jordanian Market?
              </motion.h2>
              <motion.p
                className="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let&apos;s discuss how Margo Group can help your brand grow in Jordan. Reach out and our team will be in touch.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                >
                  Contact Us
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
