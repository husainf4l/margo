'use client';

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
    label: 'Import & Distribution',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    label: 'Brand Marketing',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    label: 'Market Development',
    color: 'from-cyan-500 to-orange-500',
  },
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Margo Group
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mb-8" />

            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Margo Group is a Jordan-based company headquartered in Amman, specializing in the{' '}
              <span className="font-semibold text-gray-900">import, marketing, sales, and nationwide distribution</span>{' '}
              of international beauty, skincare, cosmetics, and personal care brands.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-10">
              We act as a strategic partner for global manufacturers seeking to enter or expand within the Jordanian market.
              Beyond logistics and retail distribution, we support our partner brands with marketing, brand development,
              merchandising, and market positioning to ensure long-term growth and strong local presence.
            </p>

            {/* Pillar chips */}
            <div className="flex flex-wrap gap-3">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all duration-200 group"
                >
                  <span className={`w-7 h-7 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {p.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="relative hidden lg:block">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-cyan-50 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-orange-50 blur-3xl" />

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white overflow-hidden shadow-2xl">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-600/30 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-tr-3xl" />

              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-6">Our Mission</p>
              <p className="text-xl font-light leading-relaxed text-white/85 mb-8">
                &ldquo;Bridging global beauty brands with Jordanian consumers through strategic partnerships, expert distribution, and lasting market presence.&rdquo;
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {[
                  { n: '15+', l: 'Years Experience' },
                  { n: '50+', l: 'Partner Brands' },
                  { n: '1,000+', l: 'Retail Points' },
                  { n: '12', l: 'Cities Covered' },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">{s.n}</p>
                    <p className="text-xs text-white/50 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
