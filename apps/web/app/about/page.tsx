import Link from 'next/link';
import BusinessAreas from '@/components/sections/BusinessAreas';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import KeyStatistics from '@/components/sections/KeyStatistics';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'About Us — Margo Group',
  description:
    "Learn about Margo Group — Jordan's leading distributor of international beauty, skincare, cosmetics, and personal care brands.",
};

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
    label: 'Import & Distribution',
    description: 'End-to-end importation and nationwide distribution across all major retail and pharmacy channels.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    label: 'Brand Marketing',
    description: 'Strategic in-market campaigns, retail activations, and brand-building programs tailored for Jordan.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    label: 'Market Development',
    description: 'Identifying growth opportunities, launching new SKUs, and expanding brand reach across new channels.',
    color: 'from-cyan-500 to-orange-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: 'Merchandising',
    description: 'In-store visibility solutions, planogram management, and shelf optimization at retail level.',
    color: 'from-blue-500 to-cyan-600',
  },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Integrity',
    description: 'We operate with full transparency and honesty with every brand, retailer, and partner we work with.',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Excellence',
    description: 'From logistics to marketing, we hold every aspect of our work to the highest professional standard.',
    gradient: 'from-orange-500 to-rose-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6 5.87a4 4 0 10-8 0m8 0a4 4 0 00-8 0M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Partnership',
    description: 'We treat our brands as long-term strategic partners, investing in their success as our own.',
    gradient: 'from-cyan-600 to-orange-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'We continuously adapt to market shifts, embracing new channels, technologies, and strategies.',
    gradient: 'from-blue-600 to-cyan-500',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Navigation ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="relative flex items-center px-4 max-w-5xl mx-auto border-b border-gray-100">
          {/* Logo — left */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/margo-group-logo.png"
                alt="Margo Group Logo"
                className="h-32 w-auto"
              />
            </Link>
          </div>

          {/* Navigation — centered absolutely */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1">
            <Link
              href="/#brands"
              className="text-gray-500 hover:text-gray-900 text-sm font-light px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              Our Brands
            </Link>
            <Link
              href="/#services"
              className="text-gray-500 hover:text-gray-900 text-sm font-light px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-900 text-sm font-semibold px-4 py-2 rounded-full bg-gray-100 transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="text-gray-500 hover:text-gray-900 text-sm font-light px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Page Hero ──────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden pt-16 pb-20">
        {/* Subtle light decorative blobs */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-orange-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-5">
              Who We Are
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Margo Group
              </span>
            </h1>
            <div className="w-14 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mb-8" />
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
              Jordan&apos;s trusted partner for the import, marketing, sales, and nationwide distribution
              of international beauty, skincare, cosmetics, and personal care brands.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story Section ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — story */}
            <div>
              <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Building Bridges Between{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">
                  Global Brands
                </span>{' '}
                and Local Markets
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mb-8" />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Margo Group is a Jordan-based company headquartered in Amman, with over{' '}
                  <span className="font-semibold text-gray-900">15 years of experience</span>{' '}
                  specializing in the import, marketing, sales, and nationwide distribution of
                  international beauty, skincare, cosmetics, and personal care brands.
                </p>
                <p>
                  Founded on the belief that Jordanian consumers deserve access to the world&apos;s
                  finest beauty and personal care products, we have carefully built a portfolio of
                  <span className="font-semibold text-gray-900"> 50+ international brands</span> spanning
                  pharmaceutical skincare, professional beauty, mass-market cosmetics, and e-commerce.
                </p>
                <p>
                  We act as a strategic partner for global manufacturers seeking to enter or expand
                  within the Jordanian market. Beyond logistics and retail distribution, we support our
                  partner brands with marketing, brand development, merchandising, and market positioning
                  to ensure long-term growth and a strong local presence.
                </p>
                <p>
                  Today, Margo Group serves over{' '}
                  <span className="font-semibold text-gray-900">1,000 retail points nationwide</span>,
                  covering pharmacies, beauty stores, salons, supermarkets, and online channels across
                  12 cities throughout Jordan.
                </p>
              </div>
            </div>

            {/* Right — mission / vision cards */}
            <div className="flex flex-col gap-6">
              {/* Mission */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-600/30 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-tr-3xl" />
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">Our Mission</p>
                <p className="text-lg font-light leading-relaxed text-white/85">
                  &ldquo;Bridging global beauty brands with Jordanian consumers through strategic
                  partnerships, expert distribution, and lasting market presence.&rdquo;
                </p>
              </div>

              {/* Vision */}
              <div className="relative bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-8 text-white overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-bl-3xl" />
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-100 mb-4">Our Vision</p>
                <p className="text-lg font-light leading-relaxed text-white/90">
                  To be the most trusted and impactful beauty distribution partner in the Levant region,
                  known for excellence, innovation, and creating win-win outcomes for brands and consumers alike.
                </p>
              </div>

              {/* Values quick strip */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-3">Core Values</p>
                <div className="flex flex-wrap gap-2">
                  {['Integrity', 'Excellence', 'Partnership', 'Innovation', 'Accountability'].map((v) => (
                    <span key={v} className="px-3 py-1 rounded-full bg-white border border-orange-100 text-sm font-semibold text-gray-700 shadow-sm">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ─────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">What We Do</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Our Core{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-base text-gray-500 max-w-sm md:text-right leading-relaxed">
                Everything a global brand needs to succeed in the Jordanian market.
              </p>
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="group relative bg-white border border-gray-100 rounded-2xl p-7 flex gap-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-sm`}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{p.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values Deep Dive ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What We Stand{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">
                For
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-sm`}>
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared Sections ────────────────────────────────────── */}
      <KeyStatistics />
      <WhyChooseUs />
      <BusinessAreas />
      <Footer />
    </div>
  );
}
