'use client';

const strengths = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6 5.87a4 4 0 10-8 0m8 0a4 4 0 00-8 0M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Experienced Team',
    description: 'Industry veterans with deep market knowledge and local expertise built over years of operating in Jordan.',
    color: 'from-cyan-600 to-blue-600',
    light: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: 'Trusted Partnerships',
    description: 'Long-standing relationships with pharmacies, retailers, and healthcare professionals across the kingdom.',
    color: 'from-orange-500 to-rose-500',
    light: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Curated Brand Selection',
    description: 'A commitment to excellence — every brand in our portfolio is carefully selected for quality and market fit.',
    color: 'from-cyan-600 to-orange-500',
    light: 'bg-gray-50',
    border: 'border-gray-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Strong Distribution Network',
    description: 'Efficient logistics and nationwide reach covering all major retail, pharmacy, salon, and online channels.',
    color: 'from-cyan-600 to-blue-600',
    light: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-4">Our Strengths</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-5 tracking-tight">
              Why Choose Margo Group
            </h2>
            <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full mb-8" />

            <p className="text-base text-foreground leading-relaxed mb-5">
              With years of experience and a commitment to excellence, Margo Group stands out as Jordan's premier beauty and personal care distributor.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Our proven track record, extensive network, and dedication to quality make us the trusted partner for international brands entering the Jordanian market.
            </p>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <div
                key={i}
                className={`group relative bg-card ${s.border} border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] overflow-hidden`}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-linear-br ${s.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-200 rounded-2xl`} />

                {/* Icon */}
                <div className={`w-10 h-10 rounded-md bg-linear-br ${s.color} flex items-center justify-center shadow-sm shrink-0`}>
                  <span className="flex text-white">{s.icon}</span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 w-6 bg-linear-r ${s.color} rounded-full opacity-50 group-hover:w-full transition-all duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
